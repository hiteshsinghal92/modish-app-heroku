import React, { useState, useEffect } from 'react'

export default function Servicehome() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost/modish-online/react/services")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <div>
                <section id="services" className="services">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Services</h2>
                            <p>Check our Services</p>
                        </div>

                        <div className="row">
                        {items.map(item => (

                      
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                    <h4><a href="">{item.title}</a></h4>
                                    <div dangerouslySetInnerHTML={{__html:item.tag_line}}></div>
                                </div>
                            </div>

                            ))}

                        </div>

                    </div>
                </section>


            </div>
        )
    }
}
