const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Express Demo App</h1> <p> Version : 4 </p>");
});

app.get("/products", (req, res) => {
  res.send(`
    <!DOCTYPE html>
        <html>
        <head>
        <title>Product List</title>
        <style>
            /* CSS styling for the table */
            table {
            background: orange;  
            border-collapse: collapse;
            width: 100%;
            font-family: Arial, sans-serif;
            }

            th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            }

            th {
            background-color: #f2f2f2;
            }

            /* Fancy CSS styles */
            body {
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: Arial, sans-serif;
            }

            .container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 20px;
            width: 80%;
            max-width: 600px;
            }

            h1 {
            text-align: center;
            margin-top: 0;
            }
        </style>
        </head>
        <body>
        <div class="container">
            <h1>Product List</h1>
            <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Category</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Product 1</td>
                <td>Description of Product 1</td>
                <td>$19.99</td>
                <td>Brand 1</td>
                <td>Category 1</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Product 2</td>
                <td>Description of Product 2</td>
                <td>$24.99</td>
                <td>Brand 2</td>
                <td>Category 2</td>
                </tr>
                <!-- Add more rows for additional products -->
            </tbody>
            </table>
        </div>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
