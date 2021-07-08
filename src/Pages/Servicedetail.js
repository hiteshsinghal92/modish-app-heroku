import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

export default function Servicedetail() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const { slug } = useParams();
console.log(`http://localhost/modish-online/react/services/${slug}`);
    useEffect(() => {
        
        fetch(`http://localhost/modish-online/react/services/${slug}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [slug])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {



        return (
            <main id="main">


                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">

                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>{items.title}</li>
                        </ol>
                        <h2>{items.title}</h2>

                    </div>
                </section>


                <section id="portfolio-details" className="portfolio-details">
                    <div className="container">

                        <div className="row gy-4">
                        <div className="col-lg-12">
                        <div className="portfolio-details-slider swiper-container">
                                    <div className="swiper-wrapper align-items-center">

                                        <div className="swiper-slide">
                                            <img src={items.banner} alt="" />
                                        </div>

                                        

                                    </div>
                                  
                                </div>
                        </div>
                           

                            <div className="col-lg-12">
                               
                                <div className="portfolio-description">
                                    <h2> <div dangerouslySetInnerHTML={{__html:items.tag_line}}></div></h2>
                                    <div dangerouslySetInnerHTML={{__html:items.description}}></div>
                                </div>
                            </div>
                           

                        </div>

                    </div>
                </section>

            </main>

        )
    }
}
