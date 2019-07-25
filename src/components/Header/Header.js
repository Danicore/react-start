import React from 'react';
import './Header.css';
function Header() {
        return(
            <div className="Header-main">
               <h1 className="Header-logo">This is my header.</h1>
               <ul className="Header-nav">
                   <li>Home</li>
                   <li>About</li>
                   <li>Gallery</li>
                   <li>Contact us</li>
               </ul>
            </div>
        );
}

export default Header;