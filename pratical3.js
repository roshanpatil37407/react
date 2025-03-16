import React, { useState } from 'react'; 
function App() { 
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', gender: '', jobInterest: false }); 
  const [submittedData, setSubmittedData] = useState(null); 
 
  const handleChange = (e) => { 
    const { name, value, type, checked } = e.target; 
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value })); 
  }; 
 
  const handleSubmit = (e) => { e.preventDefault(); setSubmittedData(formData); }; 
 
  return ( 
    <div className="App"> 
      <h1>Job Application</h1> 
 
      <form onSubmit={handleSubmit}> 
 
        <input type="text" name="name" value={formData.name} onChange={handleChange} 
placeholder="Full Name" required /> 
        <input type="email" name="email" value={formData.email} onChange={handleChange} 
placeholder="Email" required /> 
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} 
placeholder="Phone" required /> 
 
        <div> 
         
          <label><input type="radio" name="gender" value="male" checked={formData.gender === 'male'} 
onChange={handleChange} /> Male</label> 
          <label><input type="radio" name="gender" value="female" checked={formData.gender === 
'female'} onChange={handleChange} /> Female</label> 
          <label><input type="radio" name="gender" value="other" checked={formData.gender === 'other'} 
onChange={handleChange} /> Other</label> 
        </div> 
         
       <label><input type="checkbox" name="jobInterest" checked={formData.jobInterest} 
onChange={handleChange} /> Interested in a Job</label> 
         
 
                                                                                
<button type="submit">Submit</button> 
      </form> 
      {submittedData && ( 
        <div> 
          <h3>Submitted Data:</h3> 
          <p><strong>Name:</strong> {submittedData.name}</p> 
          <p><strong>Email:</strong> {submittedData.email}</p> 
          <p><strong>Phone:</strong> {submittedData.phone}</p> 
          <p><strong>Gender:</strong> {submittedData.gender}</p> 
          <p><strong>Interested in Job:</strong> {submittedData.jobInterest ? 'Yes' : 'No'}</p> 
        </div> 
      )} 
    </div> 
  ); 
} 
export default App;