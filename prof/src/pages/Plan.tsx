import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Msg from "../components/Msg";
import Navbar from "../components/Navbar";
import PlanComponent from "../components/PlanComponent";

function Plan() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const sugestie = "Sugestii ->";
    return (
        <div className="AppPlan">
            <span className="dotPlan"></span>
            <span className="dot2Plan"></span>
            <Navbar />
            {/* <Msg dest="/contact" message="Daca vrei sa ne ajuti cu ceva, scrie-ne ->" color="orange" /> */}

            <div className="mainPlan">
                <div className="t1Plan">
                    <h4 style={{ marginLeft: "30px", fontWeight: "500", fontSize: "small" }}>Ultima modificare în 17 februarie 2023.</h4>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h1 style={{ marginLeft: "30px" }}>Pașii următori</h1>
                        <h2 style={{ marginLeft: "30px", fontSize: 15, color: "white", marginTop: "-20px" }}>Structura nu e fixă și se poate schimba.</h2>
                    </div>
                    <PlanComponent data="17 februarie 2023" check={true} text="Lansarea site-ului beta pentru a strânge cât mai multe păreri despre profesori, altfel nu putem continua site-ul fără a avea o baza de date cu părerile voastre. Site-ul complet va avea statistici pentru fiecare facultate, profesor și materiile sale, pentru a-ți oferi o imagine de ansamblu cât mai corectă. Părerile vor avea un sistem de 'utilitate', studenții vor putea vota dacă o părere este utilă sau nu. " />
                    <PlanComponent data="februarie-martie 2023" check={true} text="Perioadă pentru strângerea părerilor." />
                    <PlanComponent data="aprilie 2023" check={false} text="Lansarea completă a site-ului cu toate funcționalitățile sale. Data este aproximată. Dacă ai idei pentru diferite funcționalități sau design poți completa formularul de mai jos" />
                </div>
                <a href='https://forms.gle/wKv9m1qLhayYTLo78' target="_blank" rel="noopener noreferrer" className='inscriere' >{sugestie}</a>
            </div>
            <Footer />
        </div>
    )
}

export default Plan;