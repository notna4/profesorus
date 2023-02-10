import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer2">
                <div>profesorulmeu © 2023</div>
                <div>-</div>
                <div style={{ textAlign: "center" }}>Facut in timpul sesiunii de un student politehnist din anul al doilea.</div>
                <div style={{ textAlign: "center" }}>Pentru orice sugesti sau idei, mergi pe pagina de contact</div>
                <div>-</div>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Footer;