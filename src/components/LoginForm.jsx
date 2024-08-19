// import React, { useState } from 'react';
// import axios from 'axios';
// import '../index.css';

// const LoginForm = ({ onLogin }) => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/login', credentials);
//       onLogin(response.data);
//     } catch (error) {
//       alert('Invalid username or password');
//     }
//   };

//   return (
//     <form className="login-form" onSubmit={handleSubmit}>
//       <input
//         type="email"
//         name="email"
//         value={credentials.email}
//         onChange={handleChange}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         value={credentials.password}
//         onChange={handleChange}
//         placeholder="Password"
//         required
//       />
//       <button type="submit">Login</button>
//       <p>
//         <a href="/forgot-password">Forgot Password?</a>
//       </p>
//     </form>
//   );
// };

// export default LoginForm;
import React, { useState } from 'react';
import mockApi from '../mockApi'; // Import mockApi
import '../styles.css';

const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const [role, setRole] = useState('User');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await mockApi.loginUser(credentials); // Use mockApi to login
      alert('Login successful!');
      onLogin(user);
    } catch (error) {
      alert('Invalid email or password!');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
      </label>
      
        <label>Role:
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
          <option value="Agent">Agent</option>
        </select>
        </label>
      

      <button type="submit">Login</button>
      <p>
        <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
      </p>
    </form>
  );
};

export default LoginForm;
