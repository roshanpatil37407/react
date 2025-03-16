 
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
function Home() { 
  return <h1>Welcome to the SSBT WORLD</h1>; 
} 
 
function About() { 
  return <h1>We Are The Students of TYBCA</h1>; 
} 
 
function Contact() { 
  return <h1>Please contact us When Any Jobs And Internships Are Availabel</h1>; 
} 
 
function App() { 
  return ( 
    <Router> 
      <div> 
        <nav> 
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link 
to="/contact">Contact</Link> 
        </nav> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes> 
      </div> 
    </Router> 
  ); 
} 
 
export default App;
