import React, { useRef } from "react";

type props = {
    name: string
    grade: number
    subject: string
    tags?: any
    uni: string
    text: string
    style: any
    setStyle: any
}

const ProfCard = ({ name, grade, subject, uni, tags, text, style, setStyle }: props) => {
    // console.log("tags");
    // console.log(tags);

    return (
        <div className="prof-card-div" style={style ? { position: "fixed", zIndex: "55", boxShadow: "5px 10px 80px rgba(0, 0, 0, 1)", marginTop: "20px" } : { position: "relative", boxShadow: "5px 10px 80px rgba(0, 0, 0, 0.35)" }}>
            <div className="esc" onClick={() => { setStyle(false) }}>
                <h1 style={style ? { backgroundColor: "#292727", boxShadow: "10px 10px 80px  rgb(137, 8, 8)", width: "fit-content", fontSize: "small", padding: "5px", paddingLeft: "10px", paddingRight: "10px", color: "gray", borderRadius: "15px" } : { backgroundColor: "#16151500", color: "#16151500" }}>inchide</h1>
            </div>
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