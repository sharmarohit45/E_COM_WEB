import React from 'react'
import { Link } from 'react-router-dom'

function AdminSidebar() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="">
                        <div className="list-group">
                            <Link to="/admin" className="list-group-item list-group-item-action bg-primary text-center"><h5 className='text-light'>E_WEB</h5></Link>
                            <Link to="/admin/user" className="list-group-item list-group-item-action"><i className="bi bi-person-circle text-primary"></i> <span>User</span></Link>
                            <Link to="/admin/maincategory" className="list-group-item list-group-item-action"><i className="bi bi-list text-primary"></i> <span>Main-Category</span></Link>
                            <Link to="/admin/subcategory" className="list-group-item list-group-item-action"><i className="bi bi-person-badge text-primary"></i> <span>Sub-Category</span></Link>
                            <Link to="/admin/brand" className="list-group-item list-group-item-action"><i className="bi bi-tags-fill text-primary"></i> <span>Brand</span></Link>
                            <Link to="/admin/products" className="list-group-item list-group-item-action"><i className="bi bi-cast text-primary"></i> <span>Products</span></Link>
                            <Link to="/admin/testimonial" className="list-group-item list-group-item-action"><i className="bi bi-star-fill text-primary"></i> <span>Testimonial</span></Link>
                            <Link to="/admin/newsletters" className="list-group-item list-group-item-action"><i className="bi bi-newspaper text-primary"></i> <span>Newsletters</span></Link>
                            <Link to="/admin/contactus" className="list-group-item list-group-item-action"><i className="bi bi-person-lines-fill text-primary"></i> <span>Contact-Us</span></Link>
                            <Link to="/admin/checkout" className="list-group-item list-group-item-action"><i className="bi bi-person-square text-primary"></i> <span>Check-Out</span></Link>
                            <Link to="/admin/notification" className="list-group-item list-group-item-action"><i className="bi bi-alarm-fill text-primary"></i> <span>Notification</span></Link>
                           </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar
