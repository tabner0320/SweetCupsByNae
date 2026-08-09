# Sweet Cups by Nae

Sweet Cups by Nae is a full-stack dessert shop management application built with **C#** and **.NET 10**. The project demonstrates REST API development, asynchronous programming, API consumption using `HttpClient`, and automated integration testing.

The application is designed to manage bakery products such as cupcakes, cakes, cookies, and beverages through a modern ASP.NET Core Minimal API and a console client.

---

## Features

* ASP.NET Core Minimal API
* Console application that consumes the API using `HttpClient`
* Full CRUD operations (Create, Read, Update, Delete)
* Asynchronous programming with `async` and `await`
* Integration testing with xUnit
* JSON-based product storage (initial implementation)
* RESTful API endpoints
* Clean project architecture using multiple .NET projects

---

## Technologies Used

| Category        | Technology                              |
| --------------- | --------------------------------------- |
| Language        | C#                                      |
| Framework       | .NET 10                                 |
| Backend         | ASP.NET Core Minimal API                |
| API Client      | HttpClient                              |
| Testing         | xUnit, Microsoft.AspNetCore.Mvc.Testing |
| Data Format     | JSON                                    |
| Version Control | Git & GitHub                            |
| Editor          | Visual Studio Code                      |

---

## Project Structure

```text
SweetCupsByNae.Api/
│   ASP.NET Core Minimal API

SweetCupsByNae.Console/
│   Console application that communicates with the API

SweetCupsByNae.Tests/
│   Integration tests

SweetCupsByNae.slnx
README.md
```

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/tabner0320/SweetCupsByNae.git
```

### Navigate to the Project

```bash
cd SweetCupsByNae
```

---

## Run the API

```bash
dotnet run --project SweetCupsByNae.Api
```

---

## Run the Console Application

With the API running, open a second terminal window and run:

```bash
dotnet run --project SweetCupsByNae.Console
```

---

## Run the Tests

```bash
dotnet test
```

The integration tests verify API endpoints, HTTP responses, and application behavior.

---

## Planned API Endpoints

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| GET    | `/api/products`      | Retrieve all products    |
| GET    | `/api/products/{id}` | Retrieve a product by ID |
| POST   | `/api/products`      | Add a new product        |
| PUT    | `/api/products/{id}` | Update a product         |
| DELETE | `/api/products/{id}` | Delete a product         |

---

## Future Improvements

* SQL Server database integration
* Entity Framework Core
* Inventory management
* Customer order management
* Authentication and authorization
* Administrative dashboard
* Responsive web interface using HTML, CSS, and JavaScript
* Azure deployment
* Docker containerization

---

## What I Learned

This project demonstrates my experience with:

* Building RESTful APIs using ASP.NET Core
* Designing and consuming APIs with `HttpClient`
* Implementing CRUD operations
* Writing asynchronous C# code
* Creating integration tests with xUnit
* Organizing multi-project .NET solutions
* Managing projects with Git and GitHub

---

## Author

**Theophilus Abner**

GitHub: https://github.com/tabner0320
