import React from "react";

type props = {
    placeh: string
    sub: string
}

const InputSmall = ({ placeh, sub }: props) => {


    return (
        <div className="input-div">
            <div className="input">
                <input type="text" placeholder={placeh} />
            </div>
            <div className="sub">
                <h2>{sub}</h2>
            </div>
        </div>
    )
}

export default InputSmall;