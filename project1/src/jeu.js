import React from "react";
export default class JouDe extends React.Component
{
    constructor(){
        super()
        this.state={cont:0}
    }
    render()
    {
        return(
            <div>
                <img src="image/icon.jpg"/>
                <h1>Jeu de</h1>
                <h2>Face:.....</h2>
                <h2>Nombre d'essai:{this.state.cont}</h2>
                <button onClick={()=>this.setState({cont:this.state.cont+1})}>Play</button>
                <p>bravo vous avez trouver la face cachée</p>
                <button>Instialiser</button>
            </div>
        )
    }
}