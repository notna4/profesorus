import React from "react";

type props = {
    data: string
    check: boolean
    text: string
}

const PlanComponent = ({ data, check, text }: props) => {
    return (
        <div style={{ width: "100%" }}>
            <div style={{ marginTop: "10px", marginLeft: "30px", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                <h1 style={{ fontSize: "medium" }}>{data}</h1>
                <h1 style={{ fontSize: "small", backgroundColor: "white", marginLeft: "10px", color: "#1C1C1C", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}>{check ? "În desfășurare" : "Programat"}</h1>
            </div>
            <div style={{ boxShadow: "10px 10px 80px - 31px rgba(0, 0, 0, 0.65)", marginTop: "5px", border: "1px solid #393535", borderRadius: "15px", backgroundColor: "#161515", paddingTop: "15px", paddingBottom: "15px", transition: ".2s all", width: "100%" }}>
                <div style={{ padding: "20px" }}>{text}</div>
            </div>
        </div >
    )
}

export default PlanComponent;