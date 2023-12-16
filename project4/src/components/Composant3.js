// Composant3.js

import React, { useState } from 'react';

const Composant3 = ({ users }) => {
    const [searchId, setSearchId] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleSearch = () => {
        const filtered = users.filter(user => user.id.toString().includes(searchId));
        setFilteredUsers(filtered);
    };

    return (
        <div>
            <h1>Search Users by ID</h1>
            <label>Enter User ID:</label>
            <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {filteredUsers.length > 0 ? (
                <div>
                    <h2>User with ID: {searchId}</h2>
                    <ul>
                        {filteredUsers.map(user => (
                            <li key={user.id}>
                                {user.name} - {user.email}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No user found with the specified ID.</p>
            )}
        </div>
    );
};

export default Composant3;
