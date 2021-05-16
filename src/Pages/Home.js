import React from 'react'
import Slider from "../Mycompanent/Slider";
import Abouthome from "../Mycompanent/Abouthome";
import Countdata from "../Mycompanent/Countdata";
import Whyus from "../Mycompanent/Whyus";
import Servicehome from "../Mycompanent/Servicehome";
import Testominal from "../Mycompanent/Testominal";
import Contacthome from "../Mycompanent/Contacthome";
export default function Home() {
    return (
        <>
        
            <Slider />
            <main id="main">
                <Abouthome />
                <Countdata />
                <Whyus />
                <Servicehome />
                <Testominal />
                <Contacthome />
            </main>
        </>
    )
}
