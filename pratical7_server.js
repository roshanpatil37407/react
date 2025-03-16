 
const express = require('express'); 
const cors = require('cors'); 
const app = express(); 
const PORT = 5000; 
app.use(cors()); 
const courses = [ 
  { id: 1, name: "Mathematics", description: "Learn algebra, geometry, and calculus." }, 
  { id: 2, name: "Physics", description: "Explore the laws of nature." }, 
  { id: 3, name: "Computer Science", description: "Understand programming and algorithms." }, 
]; 
app.get('/api/courses', (req, res) => { 
  res.json(courses); 
}); 
app.listen(PORT, () => { 
  console.log(`Server is running on http://localhost:${PORT}`); 
}); 
     
// Step11: Run this file (node server.js) 
 
