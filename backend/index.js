const express = require("express");

const cors = require("cors");


//Importing the mongoose package

const mongoose = require("mongoose");

const app = express();

const port = 5000;

//Creating the connection

// Replace <username>, <password>, and <your-cluster-url> with your actual Atlas details
const mongoURI = "mongodb+srv://gayathirijeyananthan:gayu20010408@cluster0.1ys7fn7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Creating the connection to MongoDB Atlas
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas Gayu"))
  .catch((err) => console.error("Could not connect to MongoDB Atlas...", err));


app.get("/", (req, res) => {

res.send("Hello World!");

});

app.use(cors()); 


app.listen(port, () => {

console.log(`Server running on port ${port}`);

});