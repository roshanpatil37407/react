import React, { useState } from 'react'; 
function LoginForm() { 
  const [formData, setFormData] = useState({ username: '', password: '' }); 
  const [errors, setErrors] = useState({}); 
  const [isSubmit, setIsSubmit] = useState(false); // Track successful submission 
   
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value }); 
   
  const validate = () => { 
    const tempErrors = {}; 
    if (!formData.username) tempErrors.username = 'Username is required'; 
    if (!formData.password) tempErrors.password = 'Password is required'; 
    setErrors(tempErrors); 
    return Object.keys(tempErrors).length === 0; 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if (validate()) { 
      setIsSubmit(true); // Set to true when form is valid 
      console.log('Login successful', formData); // You can replace this with actual login logic 
    } 
  }; 
 
  return ( 
    <div> 
      <h2>Login</h2> 
      <form onSubmit={handleSubmit}> 
        <input type="text" name="username" value={formData.username} onChange={handleChange} 
placeholder="Username" /> 
        {errors.username && <span>{errors.username}</span>} 
        <input type="password" name="password" value={formData.password} onChange={handleChange} 
placeholder="Password" /> 
        {errors.password && <span>{errors.password}</span>} 
        <button type="submit">Login</button> 
      </form> 
      {isSubmit && <div>Login Successful!</div>} {/* Show success message */} 
    </div> 
  ); 
} 
 
export default LoginForm;