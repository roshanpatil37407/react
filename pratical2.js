import React, { useState } from 'react';

function App() {
  const [formValues, setFormValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formValues.name) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formValues.email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formValues.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formValues.password || formValues.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmit(true);
      console.log('Form submitted', formValues);
    }
  };

  return (
    <div>
      <h1>Form Validation</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" value={formValues.name} onChange={handleInputChange} placeholder="Name" />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>

        <div>
          <input type="email" name="email" value={formValues.email} onChange={handleInputChange} placeholder="Email" />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>

        <div>
          <input type="password" name="password" value={formValues.password} onChange={handleInputChange} placeholder="Password" />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {isSubmit && (
        <div>
          <h2>Form Submitted</h2>
          <p><strong>Name:</strong> {formValues.name}</p>
          <p><strong>Email:</strong> {formValues.email}</p>
          <p><strong>Password:</strong> {formValues.password}</p>
        </div>
      )}
    </div>
  );
}

export default App;
