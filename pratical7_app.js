
 
import React, { useState, useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import axios from "axios"; 
 
function App() { 
  return ( 
    <Router> 
      <nav> 
        <Link to="/">Home</Link> | <Link to="/courses">Courses</Link> 
      </nav> 
      <Routes> 
        <Route path="/" element={<div><h1>Welcome to Education</h1></div>} /> 
        <Route path="/courses" element={<Courses />} /> 
      </Routes> 
    </Router> 
  ); 
} 
 
 
                                                                                        
function Courses() { 
  const [courses, setCourses] = useState([]); 
  useEffect(() => { 
    
 axios.get("http://localhost:5000/api/courses") 
      .then(res => setCourses(res.data)) 
      .catch(console.error); 
  }, []); 
   
  return ( 
    <div> 
      <h1>Courses</h1> 
      {courses.length ? courses.map(c => ( 
        <div key={c.id}><h2>{c.name}</h2><p>{c.description}</p></div> 
      )) : <p>Loading...</p>} 
    </div> 
  ); 
} 
export default App; 