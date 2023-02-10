import React from "react";

type props = {
    name: string
    grade: number
    subject: string
    tags?: any
    uni: string
    text: string
}

const ProfCard = ({ name, grade, subject, uni, tags, text }: props) => {
    console.log("H");
    console.log(tags);

    return (
        <div className="prof-card-div">
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