import React from 'react';

const HouseList = ({ filteredData, setSelectedHouse }) => {
    return (
        <div className="house-list">
            {filteredData.map(house => (
                <div key={house.id} className="house-card" onClick={() => setSelectedHouse(house)}>
                    <img src={house.image} alt={house.name} className="house-image" />
                    <div className="house-details">
                        <h3>{house.name}</h3>
                        <p>{house.features}</p>
                        <p className="house-price">{house.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HouseList;
