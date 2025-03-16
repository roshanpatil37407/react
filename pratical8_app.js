import React, { useState } from "react"; 
import axios from "axios"; 
function App() { 
  const [formData, setFormData] = useState({ name: "", email: "" }); 
  const [responseMessage, setResponseMessage] = useState(""); 
 
  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData({ ...formData, [name]: value }); 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    axios.post("http://localhost:5000/api/data", formData) 
      .then(res => setResponseMessage(res.data.message)) 
      .catch(err => console.error(err)); 
  }; 
 
  return ( 
    <div> 
  <h1>POST Method Demo</h1> 
      <form onSubmit={handleSubmit}> 
        <input type="text" name="name" placeholder="Name" value={formData.name} 
onChange={handleChange} required /> 
        
 <input type="email" name="email" placeholder="Email" value={formData.email} 
onChange={handleChange} required /> 
        <button type="submit">Submit</button> 
      </form> 
      {responseMessage && <p>{responseMessage}</p>} 
    </div> 
  ); 
} 
export default App;