import React from 'react';
import LogoPolindra from '../../images/Logo-Polindra.png';
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//Style 
import './NavBar.css';

const NavBar = () => {

    return (
        // <div className="nav-bar">
        //     <div className="navbar-info">
        //         <img src={LogoPolindra} alt="LogoPolindra"/>
        //         <h2>POLITEKNIK NEGERI INDRAMAYU</h2>
        //         <p className="slogan">Industrial Based Education</p>
        //     </div>

        //     <div className="navbar-menu">
        //         <Link to="/">Beranda</Link>
        //         <Link to="/keluhan">Form Keluhan</Link>
        //         <Link to="/statistik">Statistik</Link>
        //         <Link to="/diagram">Diagram Alir Keluhan</Link>
        //     </div>
        // </div>
        <Navbar expand="lg">
            <Navbar.Brand href="/">
            <img src={LogoPolindra} alt="LogoPolindra"/>
            E-Complaint Polindra
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link>
                        <Link className="link-menu" to="/">Beranda</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="link-menu" to="/keluhan">Form Keluhan</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="link-menu" to="/statistik">Statistik</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="link-menu" to="/daftar-keluhan">Daftar Keluhan</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="link-menu" to="/diagram">Diagram Alir Keluhan</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;