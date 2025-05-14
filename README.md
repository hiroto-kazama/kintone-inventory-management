# Kintone Inventory Management

This project implements automated inventory management between Kintone apps (Orders & Items).

## Features

- Automatic stock update upon order approval
- Prevents negative inventory
- User-friendly error handling

## How it works

- When an order is approved in Kintone, this script updates the stock in the Items app.
- Uses `kintone.api()` and Kintone workflow events.

## Files

- `automation.js`: Main script

