import React, {Component} from 'react';
import '../Header/Header';

class Footer extends Component {
    render() {
        return (
        <footer className="header">
            <div className="row" id="footer">
                <div className="medium-12 columns">
                    <p>Copyright 2019 | <a className="linkStyle" href="/"> CENIMA ONE</a></p>
                </div>
            </div>
        </footer>
        );
    }
}
export default Footer;