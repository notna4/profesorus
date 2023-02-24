import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/" className="titlu">
                profesorus
            </Link>
            <div className="tag">
                beta
            </div>
        </div>
    )
}

export default Navbar;