import React from "react";
import { ChangeEvent } from 'react';

type props = {
    placeh: string
    sub?: string
    id: string
}

const InputSmall = ({ placeh, sub, id }: props) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        console.log(newValue);
    }
    return (
        <div className="input-div">
            <div className="input">
                <input type="text" id={id} placeholder={placeh} onChange={onChange} />
            </div>
            {/* <div className="sub">
                <h2>{sub}</h2>
            </div> */}
        </div>
    )
}

export default InputSmall;