// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import PropertyCard from '../components/PropertyCard';
// import '../index.css';

// const Properties = () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       const response = await axios.get('/api/properties');
//       setProperties(response.data);
//     };
//     fetchProperties();
//   }, []);

//   return (
//     <div className="properties">
//       <h2>Properties</h2>
//       {properties.map((property) => (
//         <PropertyCard key={property.id} property={property} />
//       ))}
//     </div>
//   );
// };

// export default Properties;
import React, { useEffect, useState } from 'react';
import mockApi from '../mockApi'; // Import mockApi
import PropertyCard from '../components/PropertyCard';
import '../styles.css';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await mockApi.getProperties(); // Use mockApi to get properties
      setProperties(response);
    };
    fetchProperties();
  }, []);

  return (
    <div className="properties">
      <h1>PROPERTIES</h1>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
      
    </div>
  );
};

export default Properties;
