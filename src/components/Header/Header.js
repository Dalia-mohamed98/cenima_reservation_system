import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>CENIMA ONE</h1>
                <a className="linkStyle" href="/">Home</a> | 
                <a className="linkStyle" href="/Movies"> Movies</a> | 
                <a className="linkStyle" href="/Login"> Login</a> |
                <a className="linkStyle" href="/SignUp"> SignUp</a>
        

                {/* <div className="callout headcolor" id="Header">
                    <div className="row column">
                        <a href="/"><h1 id="tit">{this.props.name}</h1></a>
                        <a href="/Movies"><h4 id="tit">{this.props.movies}</h4></a>
                        <a href="/Login"><h4 id="tit">{this.props.login}</h4></a>
                        <a href="/SignUp"><h4 id="tit">{this.props.signup}</h4></a>
                    </div>
                </div> */}
            </header>
        );
    }
}
export default Header;