/**
 * Purpose: Automated Inventory Management System
 * This code manages inventory updates when orders are approved in the workflow.
 * It ensures accurate stock levels by:
 * 1. Validating the order details
 * 2. Checking current stock levels
 * 3. Preventing negative inventory for sales
 * 4. Updating stock in the Items app automatically
 * 
 * Note: Using app.record.detail.process.proceed.submit event to properly
 * prevent status change when validation fails
 */

(function() {
    'use strict';

    // Constants for connecting to the Items inventory management app
    var ITEMS_APP_ID = 6; // ID of the Items app
    var PRODUCT_CODE_FIELD = 'item_code';
    var STOCK_FIELD = 'stock';

    // Handle the process management status change
    kintone.events.on('app.record.detail.process.proceed', function(event) {
        // Only validate for Approved status
        if (event.nextStatus.value !== 'Approved') {
            return event;
        }

        var record = event.record;
        var itemCode = record.item_lookup.value;
        var qty = parseInt(record.qty.value, 10);
        var orderType = record.order_type.value;

        // Basic validation
        if (!itemCode) {
            alert('No item selected. Order cannot be approved.');
            return Promise.resolve(false); // Prevents status change
        }

        if (isNaN(qty) || qty <= 0) {
            alert('Invalid quantity entered. Order cannot be approved.');
            return Promise.resolve(false); // Prevents status change
        }

        // Build query to find the item in the inventory app
        var query = PRODUCT_CODE_FIELD + ' = "' + itemCode + '"';

        // Return a promise chain to handle the async operations
        return new Promise(function(resolve, reject) {
            kintone.api(kintone.api.url('/k/v1/records', true), 'GET', {
                app: ITEMS_APP_ID,
                query: query,
                fields: ['$id', STOCK_FIELD]
            }).then(function(getResp) {
                // Verify item exists in inventory
                if (getResp.records.length === 0) {
                    alert('Item with code "' + itemCode + '" not found in Items app. Order cannot be approved.');
                    resolve(false); // Prevents status change
                    return;
                }

                // Calculate new stock level
                var item = getResp.records[0];
                var itemId = item.$id.value;
                var currentStock = parseInt(item[STOCK_FIELD].value, 10);
                var newStock = orderType === 'Sale'
                    ? currentStock - qty
                    : currentStock + qty;

                // Check for negative inventory
                if (orderType === 'Sale' && newStock < 0) {
                    alert('Insufficient stock. Current stock: ' + currentStock + '. Order cannot be approved.');
                    resolve(false); // Prevents status change
                    return;
                }

                // Update the inventory
                return kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', {
                    app: ITEMS_APP_ID,
                    id: itemId,
                    record: {
                        stock: { value: newStock }
                    }
                });
            }).then(function(putResp) {
                // If we get here, the stock update was successful
                resolve(event);
            }).catch(function(error) {
                console.error('Stock update error:', error);
                alert('Failed to get or update stock. Please check the console for details. Order cannot be approved.');
                resolve(false); // Prevents status change on any error
            });
        });
    });
})();
  