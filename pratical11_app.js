import React, { useState, useEffect } from "react"; 
import axios from "axios"; 
const App = () => { 
  const [students, setStudents] = useState([]); 
  const [student, setStudent] = useState({ name: "", age: "", grade: "" }); 
 
  useEffect(() => { 
    axios.get("http://localhost:5000/students") 
      .then((res) => setStudents(res.data)) 
      .catch((err) => console.error(err)); 
  }, []); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    axios.post("http://localhost:5000/add-student", student) 
      .then(() => { 
        setStudent({ name: "", age: "", grade: "" }); 
        axios.get("http://localhost:5000/students") 
          .then((res) => setStudents(res.data)); 
      }); 
  }; 
 
  return ( 
    <div> 
      <h1>Student Management</h1> 
      <form onSubmit={handleSubmit}> 
        <input type="text" placeholder="Name" required 
          value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} /> 
        <input type="number" placeholder="Age" required 
          value={student.age} onChange={(e) => setStudent({ ...student, age: e.target.value })} /> 
        <input type="text" placeholder="Grade" required 
          value={student.grade} onChange={(e) => setStudent({ ...student, grade: e.target.value })} /> 
        <button type="submit">Add</button> 
      </form> 
    
 
 
 
                                                                                   
 
   <ul> 
        {students.map((s) => ( 
          <li key={s._id}>{s.name} - {s.age} years - Grade: {s.grade}</li> 
        ))} 
      </ul> 
    </div> 
  ); 
}; 
export default App; 
 
// Step11: Run this file (npm start)