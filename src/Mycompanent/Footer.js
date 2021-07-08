import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-6">
                                <div className="footer-info">
                                    <h3>Multi</h3>
                                    <p className="pb-3"><em>Qui repudiandae et eum dolores alias sed ea. Qui suscipit veniam excepturi quod.</em></p>
                                    <p>
                                        A108 Adam Street <br />
                                            NY 535022, USA<br /><br />
                                        <strong>Phone:</strong> +1 5589 55488 55<br />
                                        <strong>Email:</strong> info@example.com<br />
                                    </p>
                                    <div className="social-links mt-3">
                                        <NavLink to="#" className="twitter"><i className="bx bxl-twitter"></i></NavLink>
                                        <NavLink to="#" className="facebook"><i className="bx bxl-facebook"></i></NavLink>
                                        <NavLink to="#" className="instagram"><i className="bx bxl-instagram"></i></NavLink>
                                        <NavLink to="#" className="google-plus"><i className="bx bxl-skype"></i></NavLink>
                                        <NavLink to="#" className="linkedin"><i className="bx bxl-linkedin"></i></NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="#">Home</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="#">About us</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="#">Services</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="#">Terms of service</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="#">Privacy policy</NavLink></li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="#">Web Design</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="#">Web Development</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="#">Product Management</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="#">Marketing</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="#">Graphic Design</NavLink></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Multi</span></strong>. All Rights Reserved
      </div>
                    <div className="credits">

                        Designed by <NavLink to="https://bootstrapmade.com/">BootstrapMade</NavLink>
                    </div>
                </div>
            </footer>

            {/* <div id="preloader"></div> */}
            <NavLink to="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></NavLink>

        </>
    )
}
