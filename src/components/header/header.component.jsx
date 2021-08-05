import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";


const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <h1>Pokémon React</h1>
        <div className="options">
            <Link className="option" to="/pokemon">
                Pokemon
            </Link>
            <Link className="option" to="/contact">
                Contact
            </Link>
        </div>
    </div>
);

export default Header;