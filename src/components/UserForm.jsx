// import React, { useState } from 'react';
// import axios from 'axios';
// import '../index.css';

// const UserForm = ({ onSuccess }) => {
//   const [user, setUser] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     confirmPassword: '',
//     role: 'client',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (user.password !== user.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     try {
//       await axios.post('/api/register', user);
//       alert('User registered successfully!');
//       onSuccess();
//     } catch (error) {
//       alert('Error registering user!');
//     }
//   };

//   return (
//     <form className="user-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="firstName"
//         value={user.firstName}
//         onChange={handleChange}
//         placeholder="First Name"
//         required
//       />
//       <input
//         type="text"
//         name="lastName"
//         value={user.lastName}
//         onChange={handleChange}
//         placeholder="Last Name"
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         value={user.email}
//         onChange={handleChange}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="text"
//         name="phoneNumber"
//         value={user.phoneNumber}
//         onChange={handleChange}
//         placeholder="Phone Number"
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         value={user.password}
//         onChange={handleChange}
//         placeholder="Password"
//         required
//       />
//       <input
//         type="password"
//         name="confirmPassword"
//         value={user.confirmPassword}
//         onChange={handleChange}
//         placeholder="Confirm Password"
//         required
//       />
//       <div>
//         <label>
//           <input
//             type="radio"
//             name="role"
//             value="client"
//             checked={user.role === 'client'}
//             onChange={handleChange}
//           />
//           Client
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="role"
//             value="agent"
//             checked={user.role === 'agent'}
//             onChange={handleChange}
//           />
//           Agent
//         </label>
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default UserForm;
// import React, { useState } from 'react';
// import axios from 'axios';
// import '../index.css';

// const UserForm = ({ onSuccess }) => {
//   const [user, setUser] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     confirmPassword: '',
//     role: 'client',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (user.password !== user.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     try {
//       await axios.post('/api/register', user);
//       alert('User registered successfully!');
//       onSuccess();
//     } catch (error) {
//       alert('Error registering user!');
//     }
//   };

//   return (
//     <form className="user-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="firstName"
//         value={user.firstName}
//         onChange={handleChange}
//         placeholder="First Name"
//         required
//       />
//       <input
//         type="text"
//         name="lastName"
//         value={user.lastName}
//         onChange={handleChange}
//         placeholder="Last Name"
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         value={user.email}
//         onChange={handleChange}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="text"
//         name="phoneNumber"
//         value={user.phoneNumber}
//         onChange={handleChange}
//         placeholder="Phone Number"
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         value={user.password}
//         onChange={handleChange}
//         placeholder="Password"
//         required
//       />
//       <input
//         type="password"
//         name="confirmPassword"
//         value={user.confirmPassword}
//         onChange={handleChange}
//         placeholder="Confirm Password"
//         required
//       />
//       <div>
//         <label>
//           <input
//             type="radio"
//             name="role"
//             value="client"
//             checked={user.role === 'client'}
//             onChange={handleChange}
//           />
//           Client
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="role"
//             value="agent"
//             checked={user.role === 'agent'}
//             onChange={handleChange}
//           />
//           Agent
//         </label>
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default UserForm;
import React, { useState } from 'react';
import mockApi from '../mockApi'; // Import mockApi
import '../styles.css'; // Import styles

const UserForm = ({ onSuccess }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    role: 'client',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setError(''); // Clear error on input change
  };

  const validateForm = () => {
    if (user.password !== user.confirmPassword) {
      return 'Passwords do not match!';
    }
    if (!user.email.includes('@')) {
      return 'Invalid email format!';
    }
    if (user.phoneNumber.length < 10) {
      return 'Phone number must be at least 10 digits!';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formError = validateForm();
    if (formError) {
      setError(formError);
      return;
    }

    setIsSubmitting(true);
    try {
      await mockApi.registerUser(user); // Use mockApi to register user
      alert('User registered successfully!');
      onSuccess();
    } catch (error) {
      setError('Error registering user!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className="input-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
      </div>
      <fieldset>
        <legend>Role:</legend>
        <label>
          <input
            type="radio"
            name="role"
            value="client"
            checked={user.role === 'client'}
            onChange={handleChange}
          />
          Client
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="agent"
            checked={user.role === 'agent'}
            onChange={handleChange}
          />
          Agent
        </label>
      </fieldset>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
};

export default UserForm;