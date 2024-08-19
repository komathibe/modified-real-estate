import  React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';



const Header = () => (
  <header className="header">
    <h1>Real Estate Management System</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/properties">Properties</Link>
      <Link to="/Agents">Agent</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  </header>
);

export default Header;
