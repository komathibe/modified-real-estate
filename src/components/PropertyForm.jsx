// import React, { useState } from 'react';
// import axios from 'axios';
// import '../index.css';

// const PropertyForm = () => {
//   const [property, setProperty] = useState({
//     name: '',
//     dimension: '',
//     beds: '',
//     baths: '',
//     price: '',
//     image: '',
//     location: '',
//     address: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProperty({ ...property, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/properties', property);
//       alert('Property added successfully!');
//     } catch (error) {
//       alert('Error adding property!');
//     }
//   };

//   return (
//     <form className="property-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         value={property.name}
//         onChange={handleChange}
//         placeholder="Property Name"
//         required
//       />
//       <input
//         type="text"
//         name="dimension"
//         value={property.dimension}
//         onChange={handleChange}
//         placeholder="Dimension"
//         required
//       />
//       <input
//         type="number"
//         name="beds"
//         value={property.beds}
//         onChange={handleChange}
//         placeholder="Number of Beds"
//         required
//       />
//       <input
//         type="number"
//         name="baths"
//         value={property.baths}
//         onChange={handleChange}
//         placeholder="Number of Baths"
//         required
//       />
//       <input
//         type="number"
//         name="price"
//         value={property.price}
//         onChange={handleChange}
//         placeholder="Price"
//         required
//       />
//       <input
//         type="text"
//         name="image"
//         value={property.image}
//         onChange={handleChange}
//         placeholder="Image URL"
//         required
//       />
//       <input
//         type="text"
//         name="location"
//         value={property.location}
//         onChange={handleChange}
//         placeholder="Location"
//         required
//       />
//       <input
//         type="text"
//         name="address"
//         value={property.address}
//         onChange={handleChange}
//         placeholder="Address"
//         required
//       />
//       <textarea
//         name="description"
//         value={property.description}
//         onChange={handleChange}
//         placeholder="Description"
//         required
//       />
//       <button type="submit">Add Property</button>
//     </form>
//   );
// };

// export default PropertyForm;
// import React, { useState } from 'react';
// import mockApi from '../mockApi';
// import '../styles.css';

// const PropertyForm = () => {
//   const [property, setProperty] = useState({
//     name: '',
//     dimension: '',
//     beds: '',
//     baths: '',
//     price: '',
//     image: null,
//     location: '',
//     address: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProperty({ ...property, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setProperty({ ...property, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create a form data object to hold the property data
//     const formData = new FormData();
//     formData.append('name', property.name);
//     formData.append('dimension', property.dimension);
//     formData.append('beds', property.beds);
//     formData.append('baths', property.baths);
//     formData.append('price', property.price);
//     formData.append('image', property.image);
//     formData.append('location', property.location);
//     formData.append('address', property.address);
//     formData.append('description', property.description);

//     try {
//       const reader = new FileReader();
//       reader.onloadend = async () => {
//         const base64data = reader.result;
//         const newProperty = { ...property, image: base64data };
//         await mockApi.addProperty(newProperty);
//         alert('Property added successfully!');
//         setProperty({
//           name: '',
//           dimension: '',
//           beds: '',
//           baths: '',
//           price: '',
//           image: null,
//           location: '',
//           address: '',
//           description: ''
//         });
//       };

//       if (property.image) {
//         reader.readAsDataURL(property.image);
//       } else {
//         alert('Please select an image.');
//       }
//     } catch (error) {
//       alert('Error adding property!');
//     }
//   };

//   return (   
//     <div className='property-management'>
//       <h2>Property Management</h2>
//       <br/>
//     <form className="property-form" onSubmit={handleSubmit}>
//       <h3>Add New Property</h3>
//       <br/>
//       <label>
//         Property Name:
//         <input
//           type="text"
//           name="name"
//           value={property.name}
//           onChange={handleChange}
//           placeholder="Enter property name"
//           required
//         />
//       </label>

//       <label>
//         Dimension:
//         <input
//           type="text"
//           name="dimension"
//           value={property.dimension}
//           onChange={handleChange}
//           placeholder="Enter property dimension"
//           required
//         />
//       </label>

//       <label>
//         Number of Beds:
//         <input
//           type="number"
//           name="beds"
//           value={property.beds}
//           onChange={handleChange}
//           placeholder="Enter number of beds"
//           required
//         />
//       </label>

//       <label>
//         Number of Baths:
//         <input
//           type="number"
//           name="baths"
//           value={property.baths}
//           onChange={handleChange}
//           placeholder="Enter number of baths"
//           required
//         />
//       </label>

//       <label>
//         Price:
//         <input
//           type="number"
//           name="price"
//           value={property.price}
//           onChange={handleChange}
//           placeholder="Enter price"
//           required
//         />
//       </label>

//       <label>
//         Image:
//         <input
//           type="file"
//           name="image"
//           onChange={handleFileChange}
//           accept="image/*"
//           required
//         />
//       </label>

//       <label>
//         Location:
//         <input
//           type="text"
//           name="location"
//           value={property.location}
//           onChange={handleChange}
//           placeholder="Enter location"
//           required
//         />
//       </label>

//       <label>
//         Address:
//         <input
//           type="text"
//           name="address"
//           value={property.address}
//           onChange={handleChange}
//           placeholder="Enter address"
//           required
//         />
//       </label>

//       <label>
//         Description:
//         <textarea
//           name="description"
//           value={property.description}
//           onChange={handleChange}
//           placeholder="Enter description"
//           required
//         />
//       </label>

//       <button type="submit">Add Property</button>
//     </form>
//     </div>
//   );
// };

// export default PropertyForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import '../index.css';

// const PropertyForm = () => {
//   const [property, setProperty] = useState({
//     name: '',
//     dimension: '',
//     beds: '',
//     baths: '',
//     price: '',
//     image: '',
//     location: '',
//     address: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProperty({ ...property, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/properties', property);
//       alert('Property added successfully!');
//     } catch (error) {
//       alert('Error adding property!');
//     }
//   };

//   return (
//     <form className="property-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         value={property.name}
//         onChange={handleChange}
//         placeholder="Property Name"
//         required
//       />
//       <input
//         type="text"
//         name="dimension"
//         value={property.dimension}
//         onChange={handleChange}
//         placeholder="Dimension"
//         required
//       />
//       <input
//         type="number"
//         name="beds"
//         value={property.beds}
//         onChange={handleChange}
//         placeholder="Number of Beds"
//         required
//       />
//       <input
//         type="number"
//         name="baths"
//         value={property.baths}
//         onChange={handleChange}
//         placeholder="Number of Baths"
//         required
//       />
//       <input
//         type="number"
//         name="price"
//         value={property.price}
//         onChange={handleChange}
//         placeholder="Price"
//         required
//       />
//       <input
//         type="text"
//         name="image"
//         value={property.image}
//         onChange={handleChange}
//         placeholder="Image URL"
//         required
//       />
//       <input
//         type="text"
//         name="location"
//         value={property.location}
//         onChange={handleChange}
//         placeholder="Location"
//         required
//       />
//       <input
//         type="text"
//         name="address"
//         value={property.address}
//         onChange={handleChange}
//         placeholder="Address"
//         required
//       />
//       <textarea
//         name="description"
//         value={property.description}
//         onChange={handleChange}
//         placeholder="Description"
//         required
//       />
//       <button type="submit">Add Property</button>
//     </form>
//   );
// };

// export default PropertyForm;
// import React, { useState } from 'react';
// import mockApi from '../mockApi';
// import '../styles.css';

// const PropertyForm = () => {
//   const [property, setProperty] = useState({
//     name: '',
//     dimension: '',
//     beds: '',
//     baths: '',
//     price: '',
//     image: null,
//     location: '',
//     address: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProperty({ ...property, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setProperty({ ...property, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create a form data object to hold the property data
//     const formData = new FormData();
//     formData.append('name', property.name);
//     formData.append('dimension', property.dimension);
//     formData.append('beds', property.beds);
//     formData.append('baths', property.baths);
//     formData.append('price', property.price);
//     formData.append('image', property.image);
//     formData.append('location', property.location);
//     formData.append('address', property.address);
//     formData.append('description', property.description);

//     try {
//       const reader = new FileReader();
//       reader.onloadend = async () => {
//         const base64data = reader.result;
//         const newProperty = { ...property, image: base64data };
//         await mockApi.addProperty(newProperty);
//         alert('Property added successfully!');
//         setProperty({
//           name: '',
//           dimension: '',
//           beds: '',
//           baths: '',
//           price: '',
//           image: null,
//           location: '',
//           address: '',
//           description: ''
//         });
//       };

//       if (property.image) {
//         reader.readAsDataURL(property.image);
//       } else {
//         alert('Please select an image.');
//       }
//     } catch (error) {
//       alert('Error adding property!');
//     }
//   };

//   return (   
//     <div className='property-management'>
//       <h2>Property Management</h2>
//       <br/>
//     <form className="property-form" onSubmit={handleSubmit}>
//       <h3>Add New Property</h3>
//       <br/>
//       <label>
//         Property Name:
//         <input
//           type="text"
//           name="name"
//           value={property.name}
//           onChange={handleChange}
//           placeholder="Enter property name"
//           required
//         />
//       </label>

//       <label>
//         Dimension:
//         <input
//           type="text"
//           name="dimension"
//           value={property.dimension}
//           onChange={handleChange}
//           placeholder="Enter property dimension"
//           required
//         />
//       </label>

//       <label>
//         Number of Beds:
//         <input
//           type="number"
//           name="beds"
//           value={property.beds}
//           onChange={handleChange}
//           placeholder="Enter number of beds"
//           required
//         />
//       </label>

//       <label>
//         Number of Baths:
//         <input
//           type="number"
//           name="baths"
//           value={property.baths}
//           onChange={handleChange}
//           placeholder="Enter number of baths"
//           required
//         />
//       </label>

//       <label>
//         Price:
//         <input
//           type="number"
//           name="price"
//           value={property.price}
//           onChange={handleChange}
//           placeholder="Enter price"
//           required
//         />
//       </label>

//       <label>
//         Image:
//         <input
//           type="file"
//           name="image"
//           onChange={handleFileChange}
//           accept="image/*"
//           required
//         />
//       </label>

//       <label>
//         Location:
//         <input
//           type="text"
//           name="location"
//           value={property.location}
//           onChange={handleChange}
//           placeholder="Enter location"
//           required
//         />
//       </label>

//       <label>
//         Address:
//         <input
//           type="text"
//           name="address"
//           value={property.address}
//           onChange={handleChange}
//           placeholder="Enter address"
//           required
//         />
//       </label>

//       <label>
//         Description:
//         <textarea
//           name="description"
//           value={property.description}
//           onChange={handleChange}
//           placeholder="Enter description"
//           required
//         />
//       </label>

//       <button type="submit">Add Property</button>
//     </form>
//     </div>
//   );
// };

// export default PropertyForm;
import React, { useState, useEffect } from 'react';
import mockApi from '../mockApi'; // Import mockApi
import '../styles.css'; // Import specific styles for PropertyManagement

const PropertyForm = () => {
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
  const [showAddForm, setShowAddForm] = useState(false); // State to toggle form visibility
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

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
    setShowAddForm(true); // Show the form when editing
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
    setShowAddForm(false); // Hide the form after reset
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="property-management">
      <div className="header">
        <h2>Property Management</h2>
        <div className="search-add">
          <input 
            type="text" 
            placeholder="Search properties..." 
            value={searchTerm} 
            onChange={handleSearchChange} 
            className="search-bar"
          />
          <button onClick={() => setShowAddForm(!showAddForm)}>
            {showAddForm ? 'Hide Form' : 'Add Property'}
          </button>
        </div>
      </div>

      {/* Add/Edit Property Form */}
      {showAddForm && (
        <form className="property-form" onSubmit={handleSubmit}>
          <h3>{editingProperty ? 'Edit Property' : 'Add New Property'}</h3>
          {/* Form Fields */}
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
          {/* Additional Form Fields... */}
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
      )}

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
          {filteredProperties.map((property) => (
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

export default PropertyForm;
