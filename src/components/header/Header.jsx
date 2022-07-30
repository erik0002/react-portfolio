import React from 'react';
import "./header.css";
import CTA from './CTA/CTA';
import ME from '../../assets/m3.jpg';
import HeaderSocial from "./HeaderSocials/HeaderSocials";


function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello? I'm</h5>
                <h1>Yeliazar Kazhura</h1>
                <h5 className="text-light">Fullstack developer</h5>
                <CTA/>
                <HeaderSocial/>
                
                <div className="me">
                    <img src={ME} alt="me"/>
                </div>

                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;
