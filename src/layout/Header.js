import React from 'react';
import "materialize-css/dist/css/materialize.min.css";

function Header(props) {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Movie</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">App</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;