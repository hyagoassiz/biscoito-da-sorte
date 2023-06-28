import React, { Component } from "react";
import cookie from '../assets/cookie.png'

class Cookie extends Component {


    render() {
        return (
            <div className="Biscoito">
                <button onClick={this.props.AcaoBtn}>
                    <img src={cookie} alt="biscoito" />
                </button>

                <button onClick={this.props.AcaoBtn}>
                    <img src={cookie} alt="biscoito" />
                </button>

                <button onClick={this.props.AcaoBtn}>
                    <img src={cookie} alt="biscoito" />
                </button>
            </div>
        );
    };
};


export default Cookie;