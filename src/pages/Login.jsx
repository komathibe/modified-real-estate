import React from 'react';
import LoginForm from '../components/LoginForm';
import '../styles.css';

const Login = ({ history }) => {
  const handleLogin = (userData) => {
    // Handle login success, save token, and redirect
    localStorage.setItem('user', JSON.stringify(userData));
    history.push('/');
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
