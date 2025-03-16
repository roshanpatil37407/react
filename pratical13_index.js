// Step 1: Import the Express module 
const express = require('express'); 
 
// Step 2: Create an instance of Express app 
const app = express(); 
 
// Step 3: Set the port where the app will run 
const port = 3000; 
 
// Step 4: Define student data 
const students = [ 
  { id: 1, name: 'John', age: 20, course: 'Mathematics' }, 
  { id: 2, name: 'Jane', age: 22, course: 'Physics' }, 
  { id: 3, name: 'Sam ', age: 19, course: 'Computer Science' } 
]; 
 
// Step 5: Set up the route to display student information 
app.get('/', (req, res) => { 
  let studentList = '<h1>Student Information</h1><ul>'; 
   
  students.forEach(student => { 
    studentList += `<li>${student.name}, ${student.age} years old, studying ${student.course}</li>`; 
  }); 
 
  studentList += '</ul>'; 
  res.send(studentList);  // Send the student data as HTML 
}); 
 
// Step 6: Start the server 
app.listen(port, () => { 
  console.log(`Server is running on http://localhost:${port}`); 
});