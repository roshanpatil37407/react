 
 
const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const app = express(); 
const PORT = 5000; 
// Middleware 
app.use(express.json()); 
app.use(cors()); 
// MongoDB Connection 
mongoose.connect('mongodb://localhost:27017/studentDB') 
    .then(() => console.log('Connected to MongoDB')) 
    .catch(err => console.error(err)); 
// Mongoose Schema & Model 
const Student = mongoose.model('Student', { name: String, grade: String }); 
// Routes 
app.get('/students', async (req, res) => res.json(await Student.find())); 
app.post('/students', async (req, res) => res.json(await new Student(req.body).save())); 
app.delete('/students/:id', async (req, res) => res.json(await 
Student.findByIdAndDelete(req.params.id))); 
// Start Server 
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`)); 
 
 
 
 
 
                                                                                     
// Step11: Run this file (node server.js) 
 
 
 
