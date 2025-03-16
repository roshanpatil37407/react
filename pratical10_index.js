const express = require('express'); 
const app = express(); 
const port = 3000; // You can change this if needed 
 
// Middleware to parse JSON 
app.use(express.json()); 
 
// Root route 
app.get('/', (req, res) => { 
    res.send('Welcome to SSBT College!'); 
}); 
 
// Mock database 
let users = [ 
    { id: 1, name: 'John Doe' }, 
    { id: 2, name: 'Jane Doe' } 
]; 
 
// Routes for users 
app.get('/api/users', (req, res) => { 
    res.json(users); 
}); 
 
app.get('/api/users/:id', (req, res) => { 
    const user = users.find(u => u.id === parseInt(req.params.id)); 
    if (!user) return res.status(404).send('User not found'); 
    res.json(user); 
}); 
 
app.post('/api/users', (req, res) => { 
    const newUser = { 
        id: users.length + 1, 
        name: req.body.name 
    }; 
    users.push(newUser); 
    res.status(201).json(newUser); 
}); 
 
app.delete('/api/users/:id', (req, res) => { 
    users = users.filter(u => u.id !== parseInt(req.params.id)); 
    res.send('User deleted'); 
}); 
 
// Start the server 
app.listen(port, () => { 
    console.log(`Server is running at http://localhost:${port}`); 
}); 
 
 
 
 
 
                                                                                     
// Step11: Run this file (node server.js)