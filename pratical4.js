 
import React, { useState } from "react"; 
function StudentRegistrationForm() { 
  const [formData, setFormData] = useState({ name: "", email: "", password: "", course: "" }); 
 
  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData(prev => ({ ...prev, [name]: value })); 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert("Registration Successful!"); 
    console.log(formData); 
    setFormData({ name: "", email: "", password: "", course: "" }); 
  }; 
 
  return ( 
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}> 
      <h2>Student Registration</h2> 
 
      <form onSubmit={handleSubmit}> 
        <div><label>Name:</label><input type="text" name="name" value={formData.name} 
onChange={handleChange} required /></div> 
        <div><label>Email:</label><input type="email" name="email" value={formData.email} 
onChange={handleChange} required /></div> 
        <div><label>Password:</label><input type="password" name="password" 
value={formData.password} onChange={handleChange} required /></div> 
        <div> 
          <label>Course:</label> 
          <select name="course" value={formData.course} onChange={handleChange} required> 
            <option value="">Select a course</option> 
            <option value="Science">Science</option> 
            <option value="Commerce">Commerce</option> 
            <option value="Arts">Arts</option> 
          </select> 
        </div> 
        <button type="submit">Register</button> 
      </form> 
    </div> 
  ); 
} 
export default StudentRegistrationForm;