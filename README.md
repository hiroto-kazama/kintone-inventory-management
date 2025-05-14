# Kintone Inventory Management System

## What it does
This system automatically manages your inventory in Kintone by:
- Updating the Items App when orders are processed
- Preventing common inventory mistakes
- Ensuring accurate stock counts
- Providing real-time validation of orders

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
  - For general Kintone questions: Visit [Kintone Developer Network](https://developer.kintone.io)

## What This System Prevents
The system will stop an order from being approved and show a clear message when:
1. No item is selected in the order
2. The quantity entered is zero or negative
3. Trying to sell more items than are currently in stock
4. The selected item doesn't exist in inventory
