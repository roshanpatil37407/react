 
const express = require("express"); 
const cors = require("cors"); 
const app = express(); 
app.use(cors()); 
 
// Mock data to simulate server response 
const mockData = [ 
  { id: 1, name: "John Doe", email: "john@example.com" }, 
  { id: 2, name: "Jane Smith", email: "jane@example.com" }, 
]; 
 
app.get("/api/data", (req, res) => { 
  console.log("GET request received"); 
  res.json(mockData); 
}); 
 
app.listen(5000, () => console.log("Server running on http://localhost:5000")); 
 
// Step11: Run this file (node server.js) 
 
 

 
