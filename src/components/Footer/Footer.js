import React from 'react';
import './Footer.css';

function Footer() {
        return(
            <div className="Footer">
                <h1>This is my footer.</h1>
                <span className="Footer-below">
                <p>
                <h2>Links</h2>
                <ul className="Footer-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Gallery</li>
                    <li>Contact us</li>
                </ul>
                </p>
                <p>
                <h2>Sponsors</h2>
                <ul className="Footer-list">
                    <li>Jungle Association of Schools</li>
                    <li>Skills Development Council</li>
                    <li>Insaaf Welfare Fund</li>
                    <li>Proactive Community of Jungle Abad</li>
                    <li>Legendary Legion of Justice</li>
                </ul>
                </p>
                <p>
                <h2>Contact us</h2>
                <ul className="Footer-list">
                    <li>Address: 77-H, Burger street, Food land</li>
                    <li>Phone no.: 6477821</li>
                    <li>Email: aahaa@loopee.com</li>
                </ul>
                </p>
                </span>
            </div>
        );
}

export default Footer;