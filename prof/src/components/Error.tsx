import React from "react";

type props = {
    text: string
    color: string
}

const Error = ({ text, color }: props) => {
    return (
        <div className="error" style={{ color: color, boxShadow: `10px 10px 80px  ${color}` }}>
            {text}
        </div>
    )
}

export default Error;