import React from "react";
import { Link } from "react-router-dom"

type props = {
    message: string
    color: string
    dest: string
}

const Msg = ({ message, color, dest }: props) => {
    return (
        <Link to={dest} className="message" style={{ backgroundColor: `${color}` }}>
            {message}
        </Link >
    )
}

export default Msg;