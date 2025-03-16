const express = require("express"); 
const mongoose = require("mongoose"); 
const cors = require("cors"); 
const app = express(); 
app.use(express.json()); 
app.use(cors()); 
 
// MongoDB Connection (Database name: studentsDB) 
mongoose.connect("mongodb://localhost:27017/studentsDB", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
}).then(() => console.log("MongoDB connected")) 
  .catch((err) => console.error(err)); 
 
// Schema and Model (Collection name: Student) 
const Student = mongoose.model("Student", new mongoose.Schema({ 
  name: String, 
  age: Number, 
  grade: String, 
})); 
 
app.post("/add-student", async (req, res) => { 
  try {  
    await new Student(req.body).save();  
    res.send("Added!");  
  } catch (err) {  
    res.status(500).send(err.message);  
  } 
}); 
 
app.get("/students", async (req, res) => { 
  try {  
    
 
 
 
 res.json(await Student.find());  
  } catch (err) {  
    res.status(500).send(err.message);  
  } 
}); 
 
app.listen(5000, () => console.log("Server on http://localhost:5000")); 
 
// Step11: Run this file (node server.js) 
 
 

 
