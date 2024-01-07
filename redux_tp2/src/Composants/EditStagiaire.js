import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { EditStgAction } from "../config/Actions";
function EditStagiaire() {
    const { code } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const stg = useSelector(d => d.stagiaires.
        find((s) => s.code === parseInt(code)));

    const [nom, setNom] = useState(stg.nom)
    const [prenom, setPrenom] = useState(stg.prenom)
    const edit = (e) => {
        if (window.confirm("sure ??")) {

            e.preventDefault();
            dispatch(EditStgAction({
                code: code,
                nom: nom,
                prenom: prenom
    
            }))
            navigate('/');
        }
    }
    return (
        <form onSubmit={(e) => edit(e)}>
            <label>Nom</label>
            <input type="text" value={nom} required onChange={(e) => setNom(e.target.value)} />
            <label>prenom</label>
            <input type="text" value={prenom} required onChange={(e) => setPrenom(e.target.value)} />
            <button type="submit">edit</button>
        </form>
    );
}

export default EditStagiaire;