import React from 'react'
import Header from './Header'

function Projects() {
  return (
    <>
    
     {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 className="display-3 mb-4 animated slideInDown">Projects</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Projects</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Projects Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
                <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Projects</p>
                <h1 className="display-5 mb-5">We Have Completed Latest Projects</h1>
            </div>
            <div className="owl-carousel project-carousel wow fadeInUp" data-wow-delay="0.3s">
                <div className="project-item pe-5 pb-5">
                    <div className="project-img mb-3">
                        <img className="img-fluid rounded" src="img/service-1.jpg" alt=""/>
                        <a href=""><i className="fa fa-link fa-3x text-primary"></i></a>
                    </div>
                    <div className="project-title">
                        <h4 className="mb-0">Financial Planning</h4>
                    </div>
                </div>
                <div className="project-item pe-5 pb-5">
                    <div className="project-img mb-3">
                        <img className="img-fluid rounded" src="img/service-2.jpg" alt=""/>
                        <a href=""><i className="fa fa-link fa-3x text-primary"></i></a>
                    </div>
                    <div className="project-title">
                        <h4 className="mb-0">Cash Investment</h4>
                    </div>
                </div>
                <div className="project-item pe-5 pb-5">
                    <div className="project-img mb-3">
                        <img className="img-fluid rounded" src="img/service-3.jpg" alt=""/>
                        <a href=""><i className="fa fa-link fa-3x text-primary"></i></a>
                    </div>
                    <div className="project-title">
                        <h4 className="mb-0">Financial Consultancy</h4>
                    </div>
                </div>
                <div className="project-item pe-5 pb-5">
                    <div className="project-img mb-3">
                        <img className="img-fluid rounded" src="img/service-4.jpg" alt=""/>
                        <a href=""><i className="fa fa-link fa-3x text-primary"></i></a>
                    </div>
                    <div className="project-title">
                        <h4 className="mb-0">Business Loans</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Projects End --> */}


    </>
  )
}

export default Projects
