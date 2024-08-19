import React from 'react';
//import PropertyForm from '../components/PropertyForm';
import UserManagement from '../components/UserManagement';
import '../index.css';

const Admin = () => (
  <div className="admin">
    <h1>Admin Panel</h1>
    
    <UserManagement />
  </div>
);

export default Admin;
