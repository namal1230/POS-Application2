# POS Application

A Point of Sale (POS) system built with HTML, CSS, JavaScript, and Bootstrap. This application provides a user-friendly interface for managing customers, items, and orders.

## Features

### 1. Customer Management
- Add new customers with details:
  - First Name
  - Last Name
  - Address
  - Contact Information
- View all customers in a table format
- Save customer records

### 2. Item Management
- Add new items with:
  - Name
  - Description
  - Quantity
  - Price
- View all items in a table format
- Manage inventory

### 3. Order Management
- Place orders by selecting:
  - Customer ID
  - Item ID
  - Quantity
  - Date
- Validate customer and item existence
- Check item availability
- View order history with pricing information

## Technologies Used

- **Frontend Framework**: Bootstrap 5.3.6
- **Styling**: CSS (main.css)
- **JavaScript**: Vanilla JavaScript with jQuery 3.7.1
- **Architecture**: MVC (Model-View-Controller)
- **Notifications**: SweetAlert2
- **HTTP Requests**: jQuery AJAX

## Project Structure

```
POS-Application2/
├── index.html                          # Main HTML file
├── main.css                            # Main stylesheet
├── main.js                             # Main JavaScript file
├── controller/
│   ├── CustomerController.js           # Customer management logic
│   ├── ItemController.js               # Item management logic
│   └── OrderController.js              # Order management logic
├── lib/
│   └── jquery-3.7.1.min.js            # jQuery library
└── README.md                           # Project documentation
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/namal1230/POS-Application2.git
cd POS-Application2
```

2. Open `index.html` in a web browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

3. Navigate to `http://localhost:8000` in your browser

## Usage

### Adding a Customer
1. Click on the "Customer" tab
2. Fill in the customer details (First Name, Last Name, Address, Contact)
3. Click "Save Customer"
4. The customer will appear in the table below

### Adding an Item
1. Click on the "Item" tab
2. Enter the item details (Name, Description, Quantity, Price)
3. Click "Save Item"
4. The item will appear in the table below

### Placing an Order
1. Click on the "Order" tab
2. Enter the Customer ID and Item ID
3. Specify the quantity and date
4. Click "Place Order"
5. The order will be validated and saved if all details are correct
6. View order history in the table below

## Features Validation

- **Customer Validation**: Ensures customer exists before placing an order
- **Item Validation**: Checks if item is available in the system
- **Quantity Validation**: Verifies sufficient item quantity is available
- **Error Alerts**: User-friendly error messages for invalid inputs

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- Bootstrap 5.3.6 - CSS framework
- jQuery 3.7.1 - JavaScript library
- SweetAlert2 - Beautiful notifications

## License

This project is open source and available under the MIT License.

## Author

Created by namal1230

## Future Enhancements

- Backend integration with a database (MySQL, MongoDB)
- User authentication and authorization
- Advanced reporting and analytics
- Payment gateway integration
- Multi-user support
- Inventory tracking and alerts

---

For more information or to contribute, please visit the [repository](https://github.com/namal1230/POS-Application2).
