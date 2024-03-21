import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>
     {/* <!-- Page Header Start --> */}
     <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container">
        <h1 className="display-3 mb-4 animated slideInDown">Sign Up</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="#">Sign Up</a></li>
            <li className="breadcrumb-item active"><a href="#">Sign Up</a></li>
            
          </ol>
        </nav>
      </div>
    </div>
    {/* <!-- Page Header End --> */}
    {/* <!-- Callback Start --> */}
    <div className="container-fluid callback mt-5 py-5">
        <div className="container pt-5">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="bg-white border rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Sign Up
                            </p>
                            <h1 className="display-5 mb-5">Register Here...</h1>
                        </div>
                        <div className="row g-3">
                            <div className="col-sm-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                    <label >Your Name</label>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="mail" placeholder="Your Email" />
                                    <label >Your Email</label>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="mobile" placeholder="Your Mobile" />
                                    <label >Your Mobile</label>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="mobile" placeholder="Your Mobile" />
                                    <label >Password</label>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="mobile" placeholder="Your Mobile" />
                                    <label >Confirm Password</label>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
                            </div>
                            <div className="row g-3 text-center">
                                <div className="col-sm-6">
                                    <Link to="/signin"><i className="bi bi-person-circle text-primary"></i> Sign In</Link>
                                </div>
                                <div className="col-sm-6">
                                    <a href="/"><i className="bi bi-wrench"></i> forget password</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Callback End --> */}
    </>
  )
}

export default SignUp
