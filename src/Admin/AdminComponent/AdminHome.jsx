import React from 'react'

import { Link } from 'react-router-dom'
import AdminSidebar from '../AdminSidebar'



function AdminHome() {
  return (
    <>
      {/* <!-- Page Header Start --> */}
      <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <h1 className="display-3 mb-4 animated slideInDown">Welcome Admin</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">Features</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 col-md-3">
          <AdminSidebar />
          </div>
          <div className="col-sm-10 col-md-9">
            <h5 className='text-light text-center bg-primary p-2'>Admin Section</h5>
            <div className="row">
              <div className="col-md-6">
                <img className='img-fluid img-thumbnail rounded bg-primary w-100' style={{height:"400px"}}src="../../assets/img/no-image.png" alt="" />
              </div>
              <div className="col-md-6 ">
                <table className="table table-hover mt-5">
                  <tbody>
                    <tr>
                      <th scope="row">Name</th>
                      <td>Rohit Sharma</td>
                    </tr>
                    <tr>
                      <th scope="row">UserName</th>
                      <td>Rishi</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>officialrishi45@gmail.com</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td> 6393060190</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <Link to="/profile/update" className="btn btn-primary w-100 text-light ">Update Profile</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHome
