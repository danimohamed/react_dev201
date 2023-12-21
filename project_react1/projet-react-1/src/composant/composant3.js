import React, { useState } from 'react';

const Composant3 = ({ users }) => {
    const [searchId, setSearchId] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleSearch = () => {
        const filtered = users.filter(users => users.id.toString().includes(searchId));
        setFilteredUsers(filtered);
    };

    return (
        <div>
            <h1>Recherche par ID</h1>
            <label>Entrer User ID:</label>
            <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
            />
            <button onClick={handleSearch}>Recherche</button>

            {filteredUsers.length > 0 ? (
                <div>
                    <h2>User  ID: {searchId}</h2>
                    <ul>
                        {filteredUsers.map(users => (
                            <li key={users.id}>
                                {users.name} - {users.email}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Aucun users n'est affecté a ce users </p>
            )}
        </div>
    );
};

export default Composant3;