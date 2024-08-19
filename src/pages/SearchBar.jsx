import React, { useState } from 'react';

const SearchBar = ({ data, setFilteredData, setSelectedHouse }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(value) ||
            item.features.toLowerCase().includes(value) ||
            item.type.toLowerCase().includes(value) ||
            item.price.toLowerCase().includes(value) ||
            item.infrastructure.toLowerCase().includes(value) ||
            item.perks.toLowerCase().includes(value)
        );

        setFilteredData(filtered);
    };

    const handleFilter = (type) => {
        const filtered = data.filter(item => item.type === type);
        setFilteredData(filtered);
    };

    return (
        <div className="search-bar">
            <h1>Find Your Dream House</h1>
            <input
                type="text"
                placeholder="Search houses by name..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
            />
              <div className="buttons">
                <button onClick={() => handleFilter('buy')}>Buy</button>
                <button onClick={() => handleFilter('rent')}>Rent</button>
                <button onClick={() => handleFilter('sold')}>Sold</button>
            </div>
        </div>
    );
};

export default SearchBar;
