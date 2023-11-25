import React, { useState } from 'react';
import './style.css';

export function Exrv() {
    const [formData, setFormData] = useState({
        identifiant: '',
        motDePasse: '',
        date: '',
        ville: '',
        genre: '',
        loisirs: {
            sport: false,
            lecture: false,
            musique: false,
        },
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                loisirs: {
                    ...formData.loisirs,
                    [name]: checked,
                },
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { identifiant, date, ville, loisirs } = formData;
        const selectedLoisirs = Object.keys(loisirs).filter((key) => loisirs[key]);
        const successMessage = `Je suis ${identifiant} né le ${date} à ${ville} et mes loisirs sont : ${selectedLoisirs.join(', ')}`;
        setSuccessMessage(successMessage);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Inscription</h1><br />
                <label>Identifiant</label>
                <input type='text' name='identifiant' onChange={handleInputChange} /><br />
                <label>Mot de passe</label>
                <input type='password' name='motDePasse' onChange={handleInputChange} /><br />
                <label>Date</label>
                <input type='date' name='date' onChange={handleInputChange} /><br />
                <label>Ville</label>
                <select name='ville' value={formData.ville} onChange={handleInputChange}>
                    <option value="dakhla">Dakhla</option>
                    <option value="marrakech">Marrakech</option>
                    <option value="casablanca">Casablanca</option>
                    <option value="rabat">Rabat</option>
                </select><br />
                <label>Genre</label>
                <input type="radio" name="genre" value="homme" onChange={handleInputChange} />
                <label>Homme</label>
                <input type="radio" name="genre" value="femme" onChange={handleInputChange} />
                <label>Femme</label><br />
                <label>Loisirs</label>
                <input
                    type="checkbox"
                    name="sport"
                    checked={formData.loisirs.sport}
                    onChange={handleInputChange}
                />
                <label>Sport</label>
                <input
                    type="checkbox"
                    name="lecture"
                    checked={formData.loisirs.lecture}
                    onChange={handleInputChange}
                />
                <label>Lecture</label>
                <input
                    type="checkbox"
                    name="musique"
                    checked={formData.loisirs.musique}
                    onChange={handleInputChange}
                />
                <label>Musique</label><br />

                <label>Photo</label>
                <input type="file" /><br />
                <button type="submit">S'inscrire</button>
            </div>

            {successMessage && (
                <div>
                    <h2>Message de réussite :</h2>
                    <p>{successMessage}</p>
                </div>
            )}
        </form>
    );
}
