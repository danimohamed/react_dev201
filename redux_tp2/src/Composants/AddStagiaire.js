import { useState } from "react";
import { AddStgAction } from "../config/Actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function AddStagiaire() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const stgs = useSelector(d => d.stagiaires);

    const ajouter = (event) => {
        event.preventDefault();
        if (window.confirm("sure ??")) {
            dispatch(AddStgAction({
                code: stgs.at(-1).code + 1,
                nom: nom,
                prenom: prenom
            }))
            setNom('')
            setPrenom('')
            navigate('/');
        }
    }


    return (
        <form onSubmit={(e) => ajouter(e)}>
            <label>Nom</label>
            <input type="text" value={nom} required onChange={(e) => setNom(e.target.value)} />
            <label>prenom</label>
            <input type="text" value={prenom} required onChange={(e) => setPrenom(e.target.value)} />
            <button type="submit">save</button>
        </form>
    );
}

export default AddStagiaire;