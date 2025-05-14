# Kintone Inventory Management System

## What it does
This system automatically manages your inventory in Kintone by:
- Updating stock levels when orders are processed
- Preventing common inventory mistakes
- Ensuring accurate stock counts
- Providing real-time validation of orders

## Why it's useful
- **Prevents Inventory Errors**: Stops common mistakes like:
  - Selling items that aren't in stock
  - Processing orders with invalid quantities
  - Approving orders for non-existent items
- **Saves Time**: Automatically updates inventory when orders are approved
- **Reduces Manual Work**: No need to update stock levels by hand
- **Improves Accuracy**: Ensures inventory counts are always correct
- **Provides Clear Feedback**: Shows easy-to-understand error messages

## Getting Started
1. **Requirements**
   - Active Kintone subscription
   - Access to create/modify apps
   - Items App (App ID: 6) with:
     - Item Code field
     - Stock field

2. **Installation**
   For step-by-step installation instructions with screenshots, see the [Installation and Usage Guide](how-to-use.md).

## Getting Help
- **Error Messages You Might See**:
  - "No item selected. Order cannot be approved."
  - "Invalid quantity entered. Order cannot be approved."
  - "Insufficient stock. Current stock: [number]. Order cannot be approved."
  - "Item not found in Items app. Order cannot be approved."
  - "Failed to get or update stock. Please check with your system administrator."

- **Support Options**:
  - For technical issues: Contact your Kintone administrator
  - For usage questions: Refer to the [Installation and Usage Guide](how-to-use.md)
  - For bug reports: Submit an issue on this project's page
  - For general Kintone questions: Visit [Kintone Developer Network](https://developer.kintone.io)

## Features
- Automatic inventory updates when orders are approved
- Smart validation system that prevents common inventory mistakes
- Real-time stock level tracking
- Clear error messages when there are problems
- Seamless integration between orders and inventory

## What This System Prevents
The system will stop an order from being approved and show a clear message when:
1. No item is selected in the order
2. The quantity entered is zero or negative
3. Trying to sell more items than currently in stock
4. The selected item doesn't exist in inventory
5. There are technical issues updating the inventory

## Documentation
For detailed installation and usage instructions with screenshots, please see the [Installation and Usage Guide](how-to-use.md). 
