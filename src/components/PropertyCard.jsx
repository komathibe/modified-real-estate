import React from 'react';
import '../index.css';

const PropertyCard = ({ property }) => (
  <div className="property-card">
    <img src={property.image} alt={property.name} className="property-image" />
    <h3>{property.name}</h3>
    <p>Price: ${property.price}</p>
    <p>Dimension: {property.dimension}</p>
    <p>Beds: {property.beds} | Baths: {property.baths}</p>
    <p>Location: {property.location}</p>
    <p>{property.description}</p>
    
  </div>
);

export default PropertyCard;
