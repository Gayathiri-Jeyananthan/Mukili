const express = require("express");

const cors = require("cors");

//Importing the mongoose package

const mongoose = require("mongoose");

const app = express();

const port = 5000;

const Product = require("../backend/Models/product"); // Make sure the path is correct

//Creating the connection

// Replace <username>, <password>, and <your-cluster-url> with your actual Atlas details
const mongoURI =
  "mongodb+srv://gayathirijeyananthan:gayu20010408@cluster0.1ys7fn7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Creating the connection to MongoDB Atlas
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas Gayu"))
  .catch((err) => console.error("Could not connect to MongoDB Atlas...", err));

//To check the server is runnig or not
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use(cors());

//Create the new product
app.post("/create", async (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    discountPercentage: req.body.discountPercentage,
    rating: req.body.rating,
    stock: req.body.stock,
    brand: req.body.brand,
    category: req.body.category,
    thumbnail: req.body.thumbnail,
    images: req.body.images,
  });

  await Product.create(newProduct);
  res.send("Product saved to the database!");
});

//Get the all product list
app.get("/read", async (req, res) => {
  const productList = await Product.find();
  res.send(JSON.stringify(productList));
});

//Update a product based on the id
app.put("/update/:id", async (req, res) => {
  const product_id = req.params.id;
  await Product.findByIdAndUpdate(product_id, {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    discountPercentage: req.body.discountPercentage,
    rating: req.body.rating,
    stock: req.body.stock,
    brand: req.body.brand,
    category: req.body.category,
    thumbnail: req.body.thumbnail,
    images: req.body.images,
  });

  res.send("Product updated successfully!");
});

//Delete a product based on the id
app.delete("/delete/:id", async (req, res) => {
    const product_id = req.params.id;
    await Product.findByIdAndDelete(product_id);
    res.send("Product deleted!");
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
