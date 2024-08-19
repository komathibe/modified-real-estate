import React from 'react';
import '../index.css';
import PropertyForm from '../components/PropertyForm';

// import PropertyManagement from '../components/PropertyManagement';

const Agents = () => (
  <div className="clients">
    <h1>Agent Panel</h1>
    <PropertyForm/>
    {/* <PropertyManagement/> */}
  </div>
);

export default Agents;
