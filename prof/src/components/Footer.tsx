import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer2">
                <div>profesorulmeu © 2023</div>
                <div>-</div>
                <div style={{ textAlign: "center" }}><h1 style={{ fontSize: "small", width: "200px" }}>Facut in timpul sesiunii de niste studenti politehnisti din anul II.</h1></div>
                {/* <div style={{ textAlign: "center" }}>Pentru orice sugesti sau idei, mergi pe pagina de contact</div>
                <div>-</div>
                <Link to='/contact' style={{ textDecoration: "none", color: "white" }}>Contact</Link> */}
            </div>
        </div>
    )
}

export default Footer;