const express = require("express"); 
const bodyParser = require("body-parser"); 
const cors = require("cors"); 
const app = express(); 
app.use(cors()); 
app.use(bodyParser.json()); 
app.post("/api/data", (req, res) => { 
  const { name, email } = req.body; 
  console.log("POST request received:", name, email); 
  res.json({ message: "Data received successfully!" }); 
}); 
app.listen(5000, () => console.log("Server running on http://localhost:5000")); 
 
// Step11: Run this file (node server.js) 
 
 

 
