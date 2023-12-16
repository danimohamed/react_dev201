import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Composant1 from './Composant1';
import Composant3 from './Composant3';

export function Matrile() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    return (
        <div>
            <Composant1 users={users} />
            <div><Composant3 users={users} /></div>
        </div>

    );
}

export default Matrile;
