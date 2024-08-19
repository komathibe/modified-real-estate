import React from 'react';

const HouseDetail = ({ house }) => {
    if (!house) return null;

    return (
        <div className="house-detail">
            <img src={house.image} alt={house.name} className="house-image" />
            <h2>{house.name}</h2>
            <p>{house.infrastructure}</p>
            <p>{house.features}</p>
            <p>{house.perks}</p>
            <p className="house-price">{house.price}</p>
        </div>
    );
};

export default HouseDetail;
