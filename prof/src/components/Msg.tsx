import React from "react";
import { Link } from "react-router-dom"

type props = {
    message: string
    color: string
}

const Msg = ({ message, color }: props) => {

    return (
        <Link to='/plan' className="message" style={{ backgroundColor: `${color}` }}>
            {message}
        </Link >
    )
}

export default Msg;