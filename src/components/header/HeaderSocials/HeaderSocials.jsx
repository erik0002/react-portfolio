import React from 'react';
import {BsLinkedin, BsGithub, BsDribbble} from "react-icons/bs";

function HeaderSocials() {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com" rel="noreferrer" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com" rel="noreferrer" target="_blank"><BsGithub/></a>
            <a href="https://dribble.com" rel="noreferrer" target="_blank"><BsDribbble/></a>
        </div>
    );
}

export default HeaderSocials;
