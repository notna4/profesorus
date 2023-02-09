import React from "react";

type props = {
    tag: string
}

const Tags = ({ tag }: props) => {

    const handleClick = () => {
        return tag;
    }

    return (
        <div className="tag" onClick={handleClick}>
            {tag}
        </div>
    )
}

export default Tags;