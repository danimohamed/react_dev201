import { useState } from "react";
import './Style.css';

export function Gestion_note() {
    const [nom, setNom] = useState('');
    const [ligne, setLigne] = useState([]);
    const [mat, setMat] = useState('informatique');
    const [note, setNote] = useState('');
    const [expt, setExept] = useState(false);
    const [err, setErr] = useState('');

    const matieres = [
        { id: 1, matiere: 'informatique' },
        { id: 2, matiere: 'math' },
        { id: 3, matiere: 'physique' },
    ];

    const insert = () => {
        if (note < 0 || note > 20 || note.length === 0) {
            setExept(false);
            setErr('Compris entre 0 et 20');
        } else {
            const tab = matieres.filter((e) => e.matiere === mat);
            const idm = tab.map((e) => e.id);
            setLigne([...ligne, { nom: nom, id: idm, matiere: mat, note: note }]);
            setExept(true);
        }
    };

    const deleteRow = (index) => {
        const updatedLigne = [...ligne];
        updatedLigne.splice(index, 1);
        setLigne(updatedLigne);
    };

    return (
        <div>
            <h1>Gestion Notes</h1>
            <table>
                <tr>
                    <td><label>nom:</label></td>
                    <td><input type="text" onChange={(e) => setNom(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><label>matiere:</label></td>
                    <td>
                        <select onChange={(e) => { setMat(e.target.value) }}>
                            {matieres.map((m) => <option value={m.matiere} key={m.id}>{m.matiere}</option>)}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><label>Note/20:</label></td>
                    <td>
                        <input
                            type="number"
                            onChange={(e) => {
                                setNote(e.target.value);
                                if (e.target.value < 0 || e.target.value > 20) {
                                    setErr('compris entre 0 et 20');
                                } else {
                                    setErr('');
                                }
                            }}
                        />
                    </td>
                    <td><span>{err}</span></td>
                </tr>
            </table>
            <button onClick={insert}>Ajouter</button><br /><br />
            <ul className="ul">
                {expt &&
                    ligne.map((l, index) => (
                        <li key={index}>
                            
                            <span className="span">{l.nom} </span>
                            
                            <span className="span">{l.id} </span>
                            <span>voter matiere:</span>
                            <span className="span"> {l.matiere} </span>
                            <span>voter note:</span>
                            <span className="span"> {l.note} </span>
                            <span className="delete" onClick={() => deleteRow(index)}>X</span>
                        </li>

                    ))}
            </ul>
            <span>{` ${nom} voter note est : ${note} `}</span>
        </div>
    );
}
