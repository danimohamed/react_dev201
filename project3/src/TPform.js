import './style.css'
import React, { useState } from 'react';
const database = [
    { username: "user1", password: "111" },
    { username: "user2", password: "222" },
    { username: "user3", password: "333" },
];
const errors = {
    err_uname: "Votre identifiant est incorrecte.",
    err_upass: "Votre mot de passe est incorrecte."
};

function RendreForm() {
    const [Name, setName] = useState('');
    const [succes, setSucces] = useState(false);
    const [errrorMessage, setErrorMessage] = useState({});
    const rendreErrors = (name) => (
        name === errrorMessage.name && <div>{errrorMessage.message}</div>
    )
    const handleSubmit = (event) => {
        event.preventDefault();
        var { uname, upass } = document.forms[0];
        const userData = database.find((u) => u.username === uname.value)
        if (userData) {
            if (userData.password != upass.value) {

                setErrorMessage({ name: "upass", message: errors.err_upass })
            } else {
                setSucces(true)
                setName(userData.username)
            }
        } else {
            setErrorMessage({ name: "uname", message: errors.err_uname })

        }
    }
    return (
        <div className='login-form'>
            {succes ? <div>
                <form className='form'>
                    <h2 className='title'>Acceuil</h2>
                    <h3>Bonjour {Name}</h3>
                </form>

            </div> :

                <form onSubmit={handleSubmit} className='form' >
                    <h2 className='title'>Connexion</h2>
                    <div className='inputs' >
                        <label>L'identifiant</label>
                        <input type='text' name='uname' />
                        {rendreErrors('uname')}


                    </div>
                    <div className='inputs' >
                        <label >Mot de pass</label>
                        <input type='password' name='upass' />
                        {rendreErrors('upass')}


                    </div>
                    <div className="button-container">
                        <input type="submit" value="Se connecter" />
                    </div>

                </form>


            }
        </div>

    )
}





export function Connexion() {

    return (
        <div>
            <RendreForm />
        </div>
    )
}