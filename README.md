# Sweet Cups by Nae

**Sweet Cups by Nae** is a full-stack ordering application for a cheesecake cup business. Customers can browse cheesecake flavors, add individual cups or bundle deals to their order, view their cart total, enter pickup information, and submit their order to an ASP.NET Core Web API.

This project demonstrates front-end development, REST API development, JavaScript interactivity, JSON, and communication between a JavaScript front end and a C# API.

---

## Features

- Responsive Sweet Cups by Nae website
- Digital cheesecake cup menu
- Individual cheesecake flavor selection
- Bundle deal selection
- Interactive shopping cart
- Automatic order total calculation
- Remove items from the cart
- Customer checkout form
- Customer name and phone number collection
- Pickup date selection
- Special order notes
- JavaScript `fetch()` API communication
- ASP.NET Core Minimal API
- Create orders using an HTTP POST request
- View submitted orders using an HTTP GET request
- Automatic order ID generation
- CORS configuration for communication between the website and API

---

## Menu

| Cheesecake Cup | Price |
|---|---:|
| Sweet and Simple | $5.00 |
| Oreo Overload | $6.00 |
| Strawberry Swirl | $6.00 |
| Banana Cookie Crunch | $6.00 |
| Biscoff Bliss | $6.50 |

### Bundle Deals

| Bundle | Price |
|---|---:|
| 2 Cups | $11 |
| 3 Cups | $16 |
| 6 Cups | $30 |
| 12 Cups | $58 |

---

## Technologies Used

| Category | Technology |
|---|---|
| Language | C# |
| Framework | ASP.NET Core / .NET |
| Front End | HTML5, CSS3, JavaScript |
| Back End | ASP.NET Core Minimal API |
| API Communication | Fetch API / JSON |
| Version Control | Git & GitHub |
| Development Environment | Visual Studio Code |

---

## Project Structure

```text
SweetCupsByNae/
│
├── SweetCupsByNae.Api/
│   ├── Models/
│   │   └── Order.cs
│   ├── Program.cs
│   └── SweetCupsByNae.Api.csproj
│
├── SweetCupsByNae.Web/
│   ├── wwwroot/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   └── sweet-cups-menu.png
│   │   ├── js/
│   │   │   └── app.js
│   │   └── index.html
│   │
│   ├── Program.cs
│   └── SweetCupsByNae.Web.csproj
│
└── README.md
```

---

## How the Ordering System Works

The customer begins by selecting an individual cheesecake cup or a bundle deal.

```text
Choose a Cup
     ↓
Add to Order
     ↓
Shopping Cart
     ↓
Continue Order
     ↓
Customer Information
     ↓
Submit Order
     ↓
ASP.NET Core API
```

JavaScript creates an order object containing the customer's information and selected products.

The order is converted to JSON and sent to the ASP.NET Core API using an HTTP `POST` request.

---

## API Endpoints

### Check API

```http
GET /
```

Returns a message confirming that the Sweet Cups by Nae API is running.

---

### View All Orders

```http
GET /api/orders
```

Returns all orders currently stored by the API.

---

### View Order by ID

```http
GET /api/orders/{id}
```

Returns a specific order.

Example:

```http
GET /api/orders/1
```

---

### Create an Order

```http
POST /api/orders
```

Example request:

```json
{
  "customerName": "Customer Name",
  "customerPhone": "555-555-5555",
  "pickupDate": "2026-08-15",
  "orderNotes": "Please have the order ready after 3 PM.",
  "items": [
    {
      "product": "Sweet and Simple",
      "price": 5.00
    },
    {
      "product": "Oreo Overload",
      "price": 6.00
    }
  ]
}
```

---

## Running the Application

Clone the repository:

```bash
git clone https://github.com/tabner0320/SweetCupsByNae.git
```

Navigate into the project:

```bash
cd SweetCupsByNae
```

### Start the API

Open a terminal and run:

```bash
dotnet run --project SweetCupsByNae.Api
```

The terminal will display the API address:

```text
Now listening on: http://localhost:PORT
```

Keep this terminal running.

---

### Start the Website

Open a second terminal and run:

```bash
dotnet run --project SweetCupsByNae.Web
```

The terminal will display the website address:

```text
Now listening on: http://localhost:PORT
```

Open that address in your browser.

---

## Development Configuration

The JavaScript front end currently communicates with the API using a localhost address in:

```text
SweetCupsByNae.Web/wwwroot/js/app.js
```

For example:

```javascript
"http://localhost:5142/api/orders"
```

The port must match the port being used by `SweetCupsByNae.Api`.

When the application is deployed, this URL should be changed to the deployed API address.

---

## Current Data Storage

Orders are currently stored **in memory** by the ASP.NET Core API.

This means submitted orders are available while the API is running, but they are deleted when the API is stopped or restarted.

Persistent database storage is planned as a future enhancement.

---

## Future Improvements

Potential improvements include:

- SQL database integration
- Entity Framework Core
- Persistent order storage
- Order status tracking
- Admin order management dashboard
- Customer order confirmation
- Email or text notifications
- Improved checkout validation
- Mobile UI improvements
- Deployment of the Web application and API
- Automated API and integration tests

---

## Project Purpose

Sweet Cups by Nae was created to practice building a full-stack application using C#, ASP.NET Core, HTML, CSS, and JavaScript.

The project demonstrates how a front-end application can collect customer information, create structured JSON data, and communicate with a REST API using asynchronous JavaScript.

---

## Author

**Theophilus Abner**

- GitHub: [tabner0320](https://github.com/tabner0320)
- Repository: [SweetCupsByNae](https://github.com/tabner0320/SweetCupsByNae)

---

## Developer

Developed as a full-stack software development project using **C#, ASP.NET Core, JavaScript, HTML, and CSS**.
