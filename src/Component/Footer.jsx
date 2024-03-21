import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
    {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Our Office</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Ashok Nagar, New Delhi, India</p>
                    <p className="mb-2"><a href="tel:6393060190"><i className="fa fa-phone-alt text-primary me-2"></i>+91 6393060190</a></p>
                    <p className="mb-2"><a href="mailto:officialrishi45@gmail.com"><i className="fa fa-envelope text-primary me-2"></i>officialrishi45@gmail.com</a></p>
                    <div className="d-flex pt-2">
                    <a className="btn btn-light btn-sm-square rounded-circle ms-3 bg-white" href="https://www.facebook.com/profile.php?id=61556661816286">
                                <small className="fab fa-facebook-f text-primary "></small>
                            </a>
                            <a className="btn btn-light btn-sm-square rounded-circle ms-3 bg-white" href="https://x.com/ROHITSHARM92231?t=Q_slUct3WSfF43A6sOjr5Q&s=09">
                                <small className="fab fa-twitter text-primary"></small>
                            </a>
                            <a className="btn btn-light btn-sm-square rounded-circle ms-3 bg-white" href="https://www.linkedin.com/in/rohit-sharma-134076247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <small className="fab fa-linkedin-in text-primary"></small>
                            </a>
                            <a className="btn btn-light btn-sm-square rounded-circle ms-3 bg-white" href="https://wa.me/6393060190">
                                <small className="fab fa-whatsapp text-primary"></small>
                            </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Services</h4>
                    <a className="btn btn-link" href="">Financial Planning</a>
                    <a className="btn btn-link" href="">Cash Investment</a>
                    <a className="btn btn-link" href="">Financial Consultancy</a>
                    <a className="btn btn-link" href="">Business Loans</a>
                    <a className="btn btn-link" href="">Business Analysis</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Quick Links</h4>
                    <Link className="btn btn-link" to="/about">About Us</Link>
                    <Link className="btn btn-link" to="/contact">Contact Us</Link>
                    <Link className="btn btn-link" to="/service">Our Services</Link>
                    <Link className="btn btn-link" to="/">Terms & Condition</Link>
                    <Link className="btn btn-link" to="/">Support</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Newsletter</h4>
                    <p>To get a updates.... &#128187;</p>
                    <div className="position-relative w-100">
                        <input className="form-control bg-white border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                        <button type="button"
                            className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}


    {/* <!-- Copyright Start --> */}
    <div className="container-fluid copyright">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="border-bottom" href="webprrs.netlify.app">E_WEB</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                    Designed By <a className="border-bottom" href="webprrs.netlify.app">E_WEB</a> Distributed By <a
                    href="webprrs.netlify.app">E_WEB</a>
                </div>
                <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>
            </div>
        </div>
    </div>
   

   </>
  )
}

export default Footer
