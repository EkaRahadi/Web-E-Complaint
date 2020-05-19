import React from 'react';
import LogoPolindra from '../../images/Logo-Polindra.png';
import {Link} from "react-router-dom";

//Style 
import './NavBar.css';

const NavBar = () => {

    return (
        <div className="navbar">
            <div className="navbar-info">
                <img src={LogoPolindra} alt="LogoPolindra"/>
                <h2>POLITEKNIK NEGERI INDRAMAYU</h2>
                <p className="slogan">Industrial Based Education</p>
            </div>

            <div className="navbar-menu">
                <Link to="/">Beranda</Link>
                <Link to="/keluhan">Form Keluhan</Link>
                <Link to="/statistik">Statistik</Link>
                <Link to="/diagram">Diagram Alir Keluhan</Link>
            </div>
        </div>
    )
}

export default NavBar;