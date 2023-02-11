import React, { useEffect } from "react";

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <h1>contact</h1>
    )
}

export default Contact;