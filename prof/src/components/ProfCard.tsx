import React, { useRef } from "react";

type props = {
    name: string
    grade: number
    subject: string
    tags?: any
    uni: string
    text: string
    style: any
}

const ProfCard = ({ name, grade, subject, uni, tags, text, style }: props) => {
    // console.log(style);

    return (
        <div className="prof-card-div" style={style ? { position: "fixed", zIndex: "55", boxShadow: "5px 10px 80px rgba(0, 0, 0, 1)", marginTop: "20px" } : { position: "relative", boxShadow: "5px 10px 80px rgba(0, 0, 0, 0.35)" }}>
            <div className="prof-card-upper">
                <div className="prof-card-name">
                    {name}
                </div>
                <div className="prof-card-grade">
                    {grade}
                </div>
                <div className="prof-card-subject">
                    {subject}
                </div>
            </div>
            <div className="prof-card-sub-upper">
                {uni}
            </div>
            <div className="prof-card-mid">
                {tags}
            </div>
            <div className="prof-card-bottom">
                {text}
            </div>
        </div>
    )
}

export default ProfCard;