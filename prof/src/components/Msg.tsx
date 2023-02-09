import React from "react";

type props = {
    message: string
    color: string
}

const Msg = ({ message, color }: props) => {

    return (
        <div className="message" style={{ backgroundColor: `${color}` }}>
            {message}
        </div>
    )
}

export default Msg;