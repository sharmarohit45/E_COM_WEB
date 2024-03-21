import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <>
 {/* <!-- Page Header Start --> */}
 <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container">
        <h1 className="display-3 mb-4 animated slideInDown">Sign-In</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="#">Sign In</a></li>
            <li className="breadcrumb-item active"><a href="#">Sign In</a></li>
            
          </ol>
        </nav>
      </div>
    </div>
    {/* <!-- Page Header End --> */}
    {/* <!-- Callback Start --> */}
    <div className="container-fluid callback ">
        <div className="container m-5 pt-5">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="bg-white border rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Sign In
                            </p>
                            <h1 className="display-5 mb-5">Sign In Here ...</h1>
                        </div>
                        <div className="row g-3">
                            <div className="col-sm-12">
                                <div className="form-floating">
                                <label >Email/Username</label>
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />      
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-floating">
                                <label >Password</label>
                                    <input type="text" className="form-control" id="password" placeholder="Subject"/>   
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                            </div>
                            <div className="row g-3 text-center">
                                <div className="col-sm-6">
                                    <Link to="/signup"><i className="bi bi-person-circle text-primary"></i> Sign Up</Link>
                                </div>
                                <div className="col-sm-6">
                                    <a href="/"> <i className="bi bi-wrench"></i> forget password</a>
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

export default SignIn
