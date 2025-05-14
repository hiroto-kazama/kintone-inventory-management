# Kintone Inventory Management System

## Overview
This system helps you manage your inventory more efficiently by automatically updating stock levels when orders are processed. It ensures your inventory counts are always accurate by performing various checks before allowing order approvals.

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

## Error Messages You Might See
- "No item selected. Order cannot be approved."
- "Invalid quantity entered. Order cannot be approved."
- "Insufficient stock. Current stock: [number]. Order cannot be approved."
- "Item not found in Items app. Order cannot be approved."
- "Failed to get or update stock. Please check with your system administrator."

## Requirements
- Kintone Platform access
- Items App (App ID: 6) must be set up with:
  - Item Code field
  - Stock field

## Documentation
For detailed installation and usage instructions with screenshots, please see the [Installation and Usage Guide](how-to-use.md). 
