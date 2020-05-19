import React from 'react';

// Style
import './Header.css'

const Header = (props) => {

    return (
        <div className="header-container">
            <h3 className="header">{props.name}</h3>
        </div>
    )
}

export default Header;