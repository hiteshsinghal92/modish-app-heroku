import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
export default function Abouthome() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost/modish-online/react/about")
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
    }, [])

    if (error) {
        return <div>Error:{error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading !!!</div>
    } else {



        return (
            <div>
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>About</h2>
                            <p>MODISH ARRAY</p>
                        </div>

                        <div className="row content">
                            <div className="col-lg-6">
                                <p>
                                 
                                   <div dangerouslySetInnerHTML={{__html:items.tag_line}}></div>
            </p>
                                <ul>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0">
                                <p>
                                Modish Array is a web designing and software development company with a proven track record. We started our operations with a team of experts having expertise in different areas of technology. Company started its operation from jaipur development centre and in the process of moving globally.
               
            </p>
                                
                                <NavLink className="btn-learn-more" to="/about">Learn More</NavLink>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        )
    }
}
