import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { EditEmployer } from "../config/actions";

function EditStagiaire() {
    const { matricule } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const employers = useSelector((state) =>
        state.employers.find((employer) => employer.matricule === parseInt(matricule))
    );

    const [nom, setNom] = useState(employers ? employers.nom : "");
    const [departement, setDepartement] = useState(employers ? employers.departement : "");

    const editEmployer = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to edit this employer?")) {
            dispatch(
                EditEmployer({
                    matricule: parseInt(matricule),
                    nom: nom,
                    departement: departement
                })
            );
            navigate('/');
        }
    };

    const departmentOptions = ["Achat", "Vente"];

    return (
        <form onSubmit={(e) => editEmployer(e)}>
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
            <button type="submit">Edit</button>
        </form>
    );
}

export default EditStagiaire;
