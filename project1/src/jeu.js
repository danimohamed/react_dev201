import React from "react";
export default class JouDe extends React.Component
{
    constructor(){
        super()
    }
    render()
    {
        return(
            <div>
                <img src="image/icon.jpg"/>
                <h1>Jeu de</h1>
                <h2>Face:.....</h2>
                <h2>Nombre d'essai:....</h2>
                <button>Play</button>
                <p>bravo vous avez trouver la face cachée</p>
                <butto>Instialiser</butto>
            </div>
        )
    }
}