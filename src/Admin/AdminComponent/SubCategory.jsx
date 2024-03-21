import React from 'react'

function SubCategory() {
  return (
    <>
    {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <h1 className="display-3 mb-4 animated slideInDown">Sub Category</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#">Admin</a></li>
              <li className="breadcrumb-item active" aria-current="page">Sub Category</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}
    </>
  )
}

export default SubCategory
