import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      {/* <!-- Navbar Start --> */}
      <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
                    <div className="col-lg-4 px-5 text-start">
                    <div className="d-none d-lg-flex ms-2">
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
                    <div className="col-lg-8 px-5 text-end">
                        <small><a href="mailto:officialrishi45@gmail.com"><i className="fa fa-envelope text-primary me-2"></i>officialrishi45@gmail.com</a></small>
                        <small className="ms-4"><a href="tel:6393060190"><i className="fa fa-phone-alt text-primary me-2"></i>+91 6393060190</a></small>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                        <h1 className="display-5 text-primary m-0">E_WEB</h1>
                    </a>
                    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/service" className="nav-item nav-link">Services</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            <Link to="/admin" className="nav-item nav-link">Admin</Link>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Other</a>
                                <div className="dropdown-menu border-light m-0">
                                    <Link to="/projects" className="dropdown-item">Projects</Link>
                                    <Link to="/features" className="dropdown-item">Features</Link>
                                    <Link to="/member" className="dropdown-item">Team Member</Link>
                                    <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                </div>
                            </div>
                            <Link to="/signin" className="nav-item nav-link"><i className="bi bi-person-circle text-primary"></i></Link>
                        </div>
                        
                    </div>
                </nav>
            </div>
            
            {/* <!-- Navbar End --> */}

    </>
  )
}

export default Header
