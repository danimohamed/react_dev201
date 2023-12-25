import { useDispatch, useSelector } from "react-redux";
import { DeleteStgAction } from "../config/Actions";
import { Link } from "react-router-dom";
function ListStagiaire() {
    const stgs = useSelector(d => d.stagiaires);
    const dispatch = useDispatch()
    const del = (cd) => {
        if (window.confirm("sure ??"))
            dispatch(DeleteStgAction(cd))
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>code</th>
                    <th>nom</th>
                    <th>prenom</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {stgs.map((s) =>
                    <tr>
                        <td>{s.code}</td>
                        <td>{s.nom}</td>
                        <td>{s.prenom}</td>
                        <td>
                            <Link to={`/editstagiaire/${s.code}`}>
                                <button>edit</button>
                            </Link>
                            <button onClick={() => del(s.code)}>delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
export default ListStagiaire;