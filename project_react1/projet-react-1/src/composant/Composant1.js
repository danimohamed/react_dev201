import React from 'react';

const Composant1 = ({ users }) => {
    return (
        <div>
            <h2>Liste des Employés</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>email</th>


                    </tr>
                </thead>
                <tbody>
                    {users.map(users => (
                        <tr key={users.id}>
                            <td>{users.name}</td>
                            <td>{users.username}</td>
                            <td>{users.email}</td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Composant1;