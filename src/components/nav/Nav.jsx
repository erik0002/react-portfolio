import React from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {useState} from "react";

function Nav() {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" className={activeNav === '#' ? 'active' : ``}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#experience"><BiBook/></a>
            <a href="#portfolio"><RiServiceLine/></a>
            <a href="#contact"><BiMessageSquareDetail/></a>
        </nav>
    );
}

export default Nav;
