import { useDispatch, useSelector } from "react-redux";
import { DeleteEmployer } from "../config/actions";
import { Link } from "react-router-dom";

function ListStagiaire() {
    const employers = useSelector((state) => state.employers);
    const dispatch = useDispatch();

    const deleteEmployer = (matricule) => {
        if (window.confirm("Are you sure you want to delete this employer?")) {
            dispatch(DeleteEmployer(matricule));
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Matricule</th>
                    <th>Nom</th>
                    <th>Departement</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {employers.map((employer) => (
                    <tr key={employer.matricule}>
                        <td>{employer.matricule}</td>
                        <td>{employer.nom}</td>
                        <td>{employer.departement}</td>
                        <td>
                            <Link to={`/editEmployer/${employer.matricule}`}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={() => deleteEmployer(employer.matricule)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListStagiaire;
