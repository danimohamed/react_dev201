import React from "react";

export default class Message_State extends React.Component{
    constructor(){
        super()
        this.state={cont:0}
    }
    render(){
        let color = "black";
        if (this.state.cont > 19) {
            color = "green";
        } else if (this.state.cont < 0) {
            color = "red";
        }
        return(
            <div>
                <h2 style={{color: color}}>{this.state.cont}</h2>
                <button onClick={()=>this.setState({cont:this.state.cont+1})} >increment</button>
                <button onClick={()=>this.setState({cont:this.state.cont-1})} >decrement</button>
            </div>
        )
    }
}
