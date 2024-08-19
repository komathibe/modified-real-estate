// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles.css';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/forgot-password', { email });
//       alert('Password reset link sent to your email!');
//     } catch (error) {
//       alert('Error sending password reset link!');
//     }
//   };

//   return (
//     <div className="forgot-password">
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//           required
//         />
//         <button type="submit">Send Reset Link</button>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;
import React, { useState } from 'react';
import mockApi from '../mockApi'; // Import mockApi
import '../styles.css'; // Use the same stylesheet

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await mockApi.requestPasswordReset(email); // Use mockApi to check email
      setMessage(response.message);
    } catch (error) {
      setMessage('Error occurred, please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="forgot-password-form" onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </label>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Submit'}
      </button>
      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default ForgotPassword;
