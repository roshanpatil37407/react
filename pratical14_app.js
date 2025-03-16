import React, { useState, useEffect } from 'react'; 
const App = () => { 
    const [students, setStudents] = useState([]); 
    const [name, setName] = useState(''); 
    const [grade, setGrade] = useState(''); 
 
    const fetchStudents = async () => { 
        const res = await fetch('http://localhost:5000/students'); 
        setStudents(await res.json()); 
    }; 
 const addStudent = async () => { 
        await fetch('http://localhost:5000/students', { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ name, grade }), 
        }); 
        fetchStudents(); 
    }; 
 const deleteStudent = async (id) => { 
        await fetch(`http://localhost:5000/students/${id}`, { method: 'DELETE' }); 
        fetchStudents(); 
    }; 
 
    useEffect(() => { 
        fetchStudents(); 
    }, []); 
 
    return ( 
        <div> 
            <h1>Student Management</h1> 
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" /> 
            <input value={grade} onChange={e => setGrade(e.target.value)} placeholder="Grade" /> 
            <button onClick={addStudent}>Add</button> 
            <ul> 
                {students.map(student => ( 
                    <li key={student._id}> 
                        {student.name} ({student.grade}) 
                        <button onClick={() => deleteStudent(student._id)}>Delete</button> 
                    </li> 
                ))} 
            </ul> 
       
 
 
 
 
                                                                                    
  </div> 
    ); 
}; 
 
export default App; 
