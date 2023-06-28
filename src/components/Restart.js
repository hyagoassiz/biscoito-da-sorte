import React, { Component } from "react";
import restart from '../assets/restart.png'

class Restart extends Component {


    render() {
        return (
            <div className="Restart">
                <button onClick={this.props.AcaoBtn}>
                    <img className="restart" src={restart} alt="Reiniciar"/>
                </button>


            </div>
        );
    };
};


export default Restart;