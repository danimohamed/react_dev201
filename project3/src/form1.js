import { useState } from 'react';
import "./compoents/Style.css";
export function Form1() {
    const [name, setName] = useState('');
    const [math, setMath] = useState('');
    const [pc, setPc] = useState('');
    const [fr, setFr] = useState('');
    const [message, setmessage] = useState('');
    const [montion, setmontion] = useState('');
    const [c, setColor] = useState('black');


    const cluclerForm = ({ }) => {
        const moy = (parseFloat(math) + parseFloat(pc) + parseFloat(fr)) / 3;
        if (moy < 10) {
            setmessage(name + " vous avez eu: " + moy.toFixed(2));
            setmontion("faible!!")
            setColor('red')
        } else if (moy <= 10 && moy < 11) {
            setmessage(name + " vous avez eu: " + moy.toFixed(2));
            setmontion("passable!!")
            setColor('yelllow')
        } else if (moy >= 11 && moy < 13) {
            setmessage(name + " vous avez eu: " + moy.toFixed(2));
            setmontion("bine!!")
            setColor('green')
        } else if (moy >= 13 && moy < 16) {
            setmessage(name + " vous avez eu: " + moy.toFixed(2));
            setmontion("trés bine!!")
            setColor('blue')
        } else if (moy >= 16) {
            setmessage(name + " vous avez eu: " + moy.toFixed(2));
            setmontion("Excellent!!")
            setColor('orange')
        }
    }





    return (
        <div>
            <label>Nom:</label>
            <input type="text" value={name}
                onChange={(e) => setName(e.target.value)} /><br />
            <label>Math:</label>
            <input type="number" value={math}
                onChange={(e) => setMath(e.target.value)} /><br />
            <label> PC :   </label>
            <input type="number" value={pc}
                onChange={(e) => setPc(e.target.value)} /><br />
            <label> FR : </label>
            <input type="number" value={fr}
                onChange={(e) => setFr(e.target.value)} /><br />
            <button onClick={cluclerForm}>Calculer</button>
            <p>{message}</p>
            <p style={{ color: c }}>{montion}</p>

        </div>
    )
}