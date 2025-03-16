import React, { useState, useEffect } from "react"; 
import axios from "axios"; 
function App() { 
  const [data, setData] = useState([]); 
 
  useEffect(() => { 
    axios.get("http://localhost:5000/api/data") 
      .then(res => setData(res.data)) 
      
 
 .catch(err => console.error(err)); 
  }, []); 
 
  return ( 
    <div> 
      
 
 <h1>GET Method Demo</h1> 
      <h3>Data from Server:</h3> 
      <ul> 
        {data.map((item) => ( 
         
 <li key={item.id}> 
            {item.name} - {item.email} 
          </li> 
        ))} 
      </ul> 
    </div> 
  ); 
} 
export default App;