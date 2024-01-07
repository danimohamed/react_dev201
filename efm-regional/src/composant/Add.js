import { useState } from "react";
import { AddEmployer } from "../config/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './style.css';

function AddStagiaire() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [matricule, setMatricule] = useState("");
    const [nom, setNom] = useState("");
    const [departement, setDepartement] = useState("");

    const ajouterEmployer = (event) => {
        event.preventDefault();
        const parsedMatricule = parseInt(matricule);

        if (isNaN(parsedMatricule)) {
            alert("Matricule must be a valid number");
            return;
        }

        if (window.confirm("Add new employer?")) {
            dispatch(
                AddEmployer({
                    matricule: parsedMatricule,
                    nom: nom,
                    departement: departement
                })
            );
            setMatricule("");
            setNom("");
            setDepartement("");
            navigate('/');
        }
    };

    const departmentOptions = ["Achat", "Vente"];

    return (
        <form onSubmit={(e) => ajouterEmployer(e)}>
            <label>Matricule</label>
            <input
                type="number"
                value={matricule}
                required
                onChange={(e) => setMatricule(e.target.value)}
            />
            <label>Nom</label>
            <input
                type="text"
                value={nom}
                required
                onChange={(e) => setNom(e.target.value)}
            />
            <label>Departement</label>
            <select
                value={departement}
                onChange={(e) => setDepartement(e.target.value)}
                required
            >
                <option value="">Select Department</option>
                {departmentOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <button type="submit">Save</button>
        </form>
    );
}

export default AddStagiaire;
