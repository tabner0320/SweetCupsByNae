# Sweet Cups by Nae

Sweet Cups by Nae is a full-stack ordering application designed for a cheesecake cup business. Customers can enter through a branded welcome screen, browse cheesecake flavors and bundle deals, add items to an interactive shopping cart, calculate their order total, and submit pickup information through an ASP.NET Core backend.

This project demonstrates practical full-stack development using **C#, ASP.NET Core, JavaScript, HTML5, CSS3, REST APIs, and JSON**.

---

## Features

- Branded welcome splash screen with an **Enter Site** experience
- Responsive cheesecake cup menu
- Individual product ordering
- Bundle deal selections
- Interactive JavaScript shopping cart
- Automatic order total calculation
- Remove items from an order
- Checkout and customer information form
- Pickup date selection
- Special order notes
- REST API order submission
- JSON-based client/server communication
- Responsive design for desktop and mobile devices

---

## Application Experience

When the website opens, customers are greeted with a branded **Sweet Cups by Nae** welcome screen.

After selecting **Enter Site**, customers can browse the menu, choose individual cheesecake cups or bundle deals, build their order, and continue to checkout.

### Customer Order Flow

```text
Welcome Screen
      ↓
Enter Site
      ↓
Browse Menu
      ↓
Choose Products or Bundles
      ↓
Add Items to Cart
      ↓
Review Order & Total
      ↓
Continue Order
      ↓
Enter Customer Information
      ↓
Submit Order
      ↓
ASP.NET Core API
```

---

## Menu

| Cheesecake Cup | Price |
|---|---:|
| Sweet and Simple | $5.00 |
| Oreo Overload | $6.00 |
| Strawberry Swirl | $6.00 |
| Banana Cookie Crunch | $6.00 |
| Biscoff Bliss | $6.50 |

---

## Bundle Deals

| Bundle | Price |
|---|---:|
| 2 Cups | $11 |
| 3 Cups | $16 |
| 6 Cups | $30 |
| 12 Cups | $58 |

---

## Shopping Cart

The shopping cart is built with vanilla JavaScript and updates dynamically as customers make selections.

Customers can:

- Add individual cheesecake cups
- Add bundle deals
- View selected products
- Remove items from the cart
- See the order total update automatically
- Continue to the checkout form

The cart does not require the page to reload when products are added or removed.

---

## Order Form

After selecting **Continue Order**, the customer can provide:

- Name
- Phone number
- Pickup date
- Order notes or special requests

The completed order is converted to JSON and submitted to the backend API using JavaScript's Fetch API.

---

## Technologies Used

| Category | Technology |
|---|---|
| Language | C# |
| Framework | ASP.NET Core |
| Frontend | HTML5, CSS3, JavaScript |
| API | REST API |
| API Communication | Fetch API |
| Data Format | JSON |
| Styling | Custom CSS |
| Version Control | Git & GitHub |
| Development Environment | Visual Studio Code |
| Command Line | Git Bash / .NET CLI |

---

## Technical Concepts

This project demonstrates:

- Full-stack web development
- ASP.NET Core application development
- REST API integration
- JavaScript event listeners
- DOM manipulation
- Fetch API requests
- JSON serialization
- Asynchronous JavaScript
- Shopping cart state management
- Dynamic total calculations
- HTML form handling
- Client/server communication
- Responsive web design
- Static file hosting with ASP.NET Core
- Git and GitHub version control

---

## Project Structure

```text
SweetCupsByNae/
│
├── SweetCupsByNae.Web/
│   │
│   ├── Program.cs
│   │
│   └── wwwroot/
│       │
│       ├── index.html
│       │
│       ├── css/
│       │   └── style.css
│       │
│       ├── js/
│       │   └── app.js
│       │
│       └── images/
│           ├── logo.png
│           ├── sweet-cups-menu.png
│           └── sweet-cups-welcome.png
│
└── README.md
```

---

## Frontend

The frontend is built with **HTML5, CSS3, and vanilla JavaScript**.

### HTML

`index.html` provides the structure for:

- Welcome screen
- Header
- Hero section
- Menu
- Product cards
- Bundle deals
- Shopping cart
- Customer order form

### CSS

`style.css` handles:

- Page layout
- Brand styling
- Welcome splash screen
- Buttons
- Product presentation
- Responsive behavior
- Mobile layout

### JavaScript

`app.js` handles:

- Welcome screen interaction
- Product selection
- Bundle selection
- Shopping cart management
- Removing cart items
- Order total calculations
- Checkout behavior
- Form submission
- API communication

---

## Backend

The application uses **ASP.NET Core** to host the website and support backend functionality.

The frontend prepares customer order information as JSON and sends it to the order API.

Example:

```javascript
const response = await fetch(
    "http://localhost:5142/api/orders",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    }
);
```

> **Development Note:** The API currently uses a localhost address during development. A deployed version of the application would use the URL of the deployed backend API.

---

## Running the Application

### 1. Clone the repository

```bash
git clone https://github.com/tabner0320/SweetCupsByNae.git
```

### 2. Navigate to the repository

```bash
cd SweetCupsByNae
```

### 3. Restore the .NET dependencies

```bash
dotnet restore
```

### 4. Run the web application

```bash
dotnet run --project SweetCupsByNae.Web
```

ASP.NET Core will display the local development URL in the terminal.

Example:

```text
Now listening on: http://localhost:5027
```

Open the URL displayed by your terminal in a web browser.

---

## Current Development Status

The application currently includes the core customer ordering experience:

- Welcome screen
- Product menu
- Bundle selections
- Shopping cart
- Automatic totals
- Checkout form
- Order submission logic

Additional backend and deployment features can be added as the project continues to grow.

---

## Future Improvements

Planned or potential improvements include:

- Persistent database storage
- Administrative order dashboard
- Customer order confirmation page
- Email or text notifications
- Online payment processing
- Quantity controls
- Custom flavor selections for bundles
- Order status tracking
- Enhanced form validation
- Administrative authentication
- Cloud deployment

---

## Skills Demonstrated

`C#` `ASP.NET Core` `JavaScript` `HTML5` `CSS3` `REST APIs` `Fetch API` `JSON` `DOM Manipulation` `Responsive Web Design` `Git` `GitHub`

---

## Project Purpose

Sweet Cups by Nae was created as a practical full-stack development project centered around a real-world small-business ordering experience.

The project demonstrates how a JavaScript frontend can interact with an ASP.NET Core backend to create an application where customers can browse products, build an order, calculate totals, provide pickup information, and submit order data through a REST API.

---

## Repository

**GitHub:**  
https://github.com/tabner0320/SweetCupsByNae

---

## Author

**Theophilus M. Abner Jr.**

Software Development and IT professional focused on building practical applications with **C#, .NET, ASP.NET Core, JavaScript, REST APIs, cloud technologies, and automation**.