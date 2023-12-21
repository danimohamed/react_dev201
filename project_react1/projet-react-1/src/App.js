import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Composant1 from './composant/Composant1';
import Composant3 from './composant/composant3';

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Appel de l'API pour récupérer les employés
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des employés:', error);
            });
    }, []); // Le tableau vide [] assure que le useEffect s'exécute une seule fois après le rendu initial

    return (
        <div>
            <div>
                <Composant1 users={users} />
                <div><Composant3 users={users} /></div>
            </div>

        </div>
    );
};

export default App;