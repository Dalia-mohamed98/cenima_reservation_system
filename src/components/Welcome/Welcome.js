import React, {Component} from 'react';
import './Welcome.css';
class Welcome extends Component {
    render() {
        return (
            <div className="wlc " id="Body">
                <div className="medium-12 columns">
                    <h3 id="welcomeText">Welcome To Cinema One For Easy Reservation System</h3>
                    <a href="/login" className="button">Login</a>
                    <a href="/signup" className="button success">Signup</a>
                </div>
            </div>
        );
    }
}
export default Welcome;