import React from 'react';
import UserForm from '../components/UserForm';
import '../styles.css';

const Register = ({ history }) => {
  const handleSuccess = () => {
    history.push('/login');
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <UserForm onSuccess={handleSuccess} />
    </div>
  );
};

export default Register;
