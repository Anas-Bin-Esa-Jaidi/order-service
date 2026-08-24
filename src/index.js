const express = require("express");
const app = express();
app.get("/orders", (req, res) => res.json([{ id: 5001, product: "Laptop" }]));
app.listen(3002, () => console.log("Order Service running on 3002"));
