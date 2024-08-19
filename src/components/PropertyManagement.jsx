// import React, { useState, useEffect } from 'react';
// import mockApi from '../mockApi'; // Import mockApi
// import '../styles.css'; // Import specific styles for PropertyManagement

// const PropertyManagement = () => {
//   const [properties, setProperties] = useState([]);
//   const [newProperty, setNewProperty] = useState({
//     name: '',
//     location: '',
//     price: '',
//     type: 'Residential',
//   });
//   const [editingProperty, setEditingProperty] = useState(null);
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const propertyList = await mockApi.getProperties();
//         setProperties(propertyList);
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       }
//     };

//     fetchProperties();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewProperty({ ...newProperty, [name]: value });
//     setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       if (editingProperty) {
//         // Update existing property
//         // Add your update logic here (e.g., mockApi.updateProperty(newProperty))
//         alert('Property updated successfully!');
//       } else {
//         await mockApi.addProperty(newProperty); // Add new property
//         alert('Property added successfully!');
//       }
//       const updatedProperties = await mockApi.getProperties(); // Refresh property list
//       setProperties(updatedProperties);
//       resetForm();
//     } catch (error) {
//       setError('Error saving property!');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleEdit = (property) => {
//     setEditingProperty(property);
//     setNewProperty(property);
//   };

//   const handleDelete = async (propertyId) => {
//     // Placeholder for delete functionality
//     alert(`Delete functionality not implemented for property ID: ${propertyId}`);
//   };

//   const resetForm = () => {
//     setNewProperty({
//       name: '',
//       location: '',
//       price: '',
//       type: 'Residential',
//     });
//     setEditingProperty(null);
//     setError('');
//   };

//   return (
//     <div className="property-management">
//       <h2>Property Management</h2>
//       <form className="property-form" onSubmit={handleSubmit}>
//         <h3>{editingProperty ? 'Edit Property' : 'Add New Property'}</h3>
//         <div className="input-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={newProperty.name}
//             onChange={handleChange}
//             placeholder="Property Name"
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="location">Location:</label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={newProperty.location}
//             onChange={handleChange}
//             placeholder="Property Location"
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="price">Price:</label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             value={newProperty.price}
//             onChange={handleChange}
//             placeholder="Property Price"
//             required
//           />
//         </div>
//         <fieldset>
//           <legend>Type:</legend>
//           <label>
//             <input
//               type="radio"
//               name="type"
//               value="Residential"
//               checked={newProperty.type === 'Residential'}
//               onChange={handleChange}
//             />
//             Residential
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="type"
//               value="Commercial"
//               checked={newProperty.type === 'Commercial'}
//               onChange={handleChange}
//             />
//             Commercial
//           </label>
//         </fieldset>
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? 'Saving...' : editingProperty ? 'Update Property' : 'Add Property'}
//         </button>
//         {editingProperty && (
//           <button type="button" onClick={resetForm} className="reset-button">
//             Cancel
//           </button>
//         )}
//       </form>
//       <h3>Existing Properties</h3>
//       <table className="property-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Location</th>
//             <th>Price</th>
//             <th>Type</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {properties.map((property) => (
//             <tr key={property.id}>
//               <td>{property.name}</td>
//               <td>{property.location}</td>
//               <td>${property.price}</td>
//               <td>{property.type}</td>
//               <td>
//                 <button onClick={() => handleEdit(property)}>Edit</button>
//                 <button onClick={() => handleDelete(property.id) }className="delBtn">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PropertyManagement;
import React, { useState, useEffect } from 'react';
import mockApi from '../mockApi'; 
import '../styles.css'; 

const PropertyManagement = () => {
  const [properties, setProperties] = useState([]);
  const [newProperty, setNewProperty] = useState({
    name: '',
    dimension: '',
    beds: '',
    baths: '',
    price: '',
    image: null,
    location: '',
    address: '',
    description: '',
    type: 'Residential', // Added for consistency
  });
  const [editingProperty, setEditingProperty] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const propertyList = await mockApi.getProperties();
        setProperties(propertyList);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProperty({ ...newProperty, [name]: value });
    setError('');
  };

  const handleFileChange = (e) => {
    setNewProperty({ ...newProperty, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (editingProperty) {
        // Update existing property
        const updatedProperty = { ...newProperty, id: editingProperty.id };
        await mockApi.updateProperty(editingProperty.id, updatedProperty);
        alert('Property updated successfully!');
      } else {
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64data = reader.result;
          const propertyToAdd = { ...newProperty, image: base64data };
          await mockApi.addProperty(propertyToAdd);
          alert('Property added successfully!');
        };
        if (newProperty.image) {
          reader.readAsDataURL(newProperty.image);
        } else {
          alert('Please select an image.');
        }
      }
      const updatedProperties = await mockApi.getProperties(); // Refresh property list
      setProperties(updatedProperties);
      resetForm();
    } catch (error) {
      setError('Error saving property!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (property) => {
    setEditingProperty(property);
    setNewProperty(property);
  };

  const handleDelete = async (propertyId) => {
    try {
      await mockApi.deleteProperty(propertyId);
      const updatedProperties = await mockApi.getProperties();
      setProperties(updatedProperties);
    } catch (error) {
      setError('Error deleting property!');
    }
  };

  const resetForm = () => {
    setNewProperty({
      name: '',
      dimension: '',
      beds: '',
      baths: '',
      price: '',
      image: null,
      location: '',
      address: '',
      description: '',
      type: 'Residential',
    });
    setEditingProperty(null);
    setError('');
  };

  return (
    <div className="property-management">
      <h2>Property Management</h2>
      <form className="property-form" onSubmit={handleSubmit}>
        <h3>{editingProperty ? 'Edit Property' : 'Add New Property'}</h3>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProperty.name}
            onChange={handleChange}
            placeholder="Property Name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="dimension">Dimension:</label>
          <input
            type="text"
            id="dimension"
            name="dimension"
            value={newProperty.dimension}
            onChange={handleChange}
            placeholder="Property Dimension"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="beds">Number of Beds:</label>
          <input
            type="number"
            id="beds"
            name="beds"
            value={newProperty.beds}
            onChange={handleChange}
            placeholder="Number of Beds"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="baths">Number of Baths:</label>
          <input
            type="number"
            id="baths"
            name="baths"
            value={newProperty.baths}
            onChange={handleChange}
            placeholder="Number of Baths"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProperty.price}
            onChange={handleChange}
            placeholder="Property Price"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={newProperty.location}
            onChange={handleChange}
            placeholder="Property Location"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={newProperty.address}
            onChange={handleChange}
            placeholder="Property Address"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={newProperty.description}
            onChange={handleChange}
            placeholder="Property Description"
            required
          />
        </div>
        <fieldset>
          <legend>Type:</legend>
          <label>
            <input
              type="radio"
              name="type"
              value="Residential"
              checked={newProperty.type === 'Residential'}
              onChange={handleChange}
            />
            Residential
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="Commercial"
              checked={newProperty.type === 'Commercial'}
              onChange={handleChange}
            />
            Commercial
          </label>
        </fieldset>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : editingProperty ? 'Update Property' : 'Add Property'}
        </button>
        {editingProperty && (
          <button type="button" onClick={resetForm} className="reset-button">
            Cancel
          </button>
        )}
      </form>
      <h3>Existing Properties</h3>
      <table className="property-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Price</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.location}</td>
              <td>${property.price}</td>
              <td>{property.type}</td>
              <td>
                <button onClick={() => handleEdit(property)}>Edit</button>
                <button onClick={() => handleDelete(property.id)} className="delBtn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyManagement;