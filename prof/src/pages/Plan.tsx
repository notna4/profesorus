import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Msg from "../components/Msg";
import Navbar from "../components/Navbar";
import PlanComponent from "../components/PlanComponent";

function Plan() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="AppPlan">
            <span className="dotPlan"></span>
            <span className="dot2Plan"></span>
            <Navbar />
            {/* <Msg dest="/contact" message="Daca vrei sa ne ajuti cu ceva, scrie-ne ->" color="orange" /> */}

            <div className="mainPlan">
                <div className="t1Plan">
                    <h4 style={{ marginLeft: "30px", fontWeight: "500", fontSize: "small" }}>Ultima modificare in 17 februarie 2023.</h4>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h1 style={{ marginLeft: "30px" }}>Pasii urmatori</h1>
                        <h2 style={{ marginLeft: "30px", fontSize: 15, color: "white", marginTop: "-20px" }}>Structura nu e fixa si se poate schimba.</h2>
                    </div>
                    <PlanComponent data="17 februarie 2023" check={true} text="Lansarea site-ului in beta pentru a strange
    cat mai multe experiente ale studentilor despre profesorii pe care i-au avut sau ii au acum in facultatile din Romania." />
                    <PlanComponent data="februarie-martie 2023" check={false} text="Perioada pentru strangere de experiente." />
                    <PlanComponent data="aprilie 2023" check={false} text="Lansarea completa a site-ului care va arata ca in imaginile prezentate pe pagina principala.
    ― Design-ul se poate modifica, scrie-ne daca ai sugestii :) ―
    Vei putea cauta profesori de la orice facultate din tara, citind experientele pe care le-au avut alti studenti ca si tine, cu ei. 

    Poti da note profesorilor, iar nota fiecarui profesor afecteaza nota totala a fiecarei universitati." />

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Plan;