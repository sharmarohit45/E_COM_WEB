import React, { useState } from 'react'
import AdminSidebar from '../AdminSidebar'
import formValidator from '../../Component/Validation/formValidator'
import { useNavigate } from 'react-router-dom'

function CreateMainCategory() {
  let [name, setName] = useState('')
  let [show, setShow] = useState(false)
  let [errmsg, setErrMsg] = useState("Name Feild is Mandatory")
  const navigate = useNavigate()
  function getInputData(e) {
    setName(e.target.value)
    setErrMsg(formValidator(e))
    setShow(false)
  }
  async function postData(e) {
    e.preventDefault()
    if (errmsg.length === 0) {
      
      let response = await fetch("http://localhost:8000/maincategory", {
        method: "get",
        headers: {
          "content-type": "applocation/json"
        }
      })
      response = await response.json()
      let item = response.find((x) => x.name.toLowerCase() === name.toLowerCase())
      if (item) {
        setErrMsg("Main Category Name Already Exist !!!!")
        setShow(true)
      }
      else {
        response = await fetch("http://localhost:8000/maincategory", {
          method: "post",
          headers: {
            "content-type": "applocation/json"
          }, body: JSON.stringify({ name: name })
        })
        response = response.json()
        navigate("/admin/maincategory")
      }

    }
    else {
      setShow(true)
    }
  }

  return (
    <>
      {/* <!-- Page Header Start --> */}
      <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <h1 className="display-3 mb-4 animated slideInDown">Create-Main-Category</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#">Admin</a></li>
              <li className="breadcrumb-item"><a href="#">Main-category</a></li>
              <li className="breadcrumb-item active" aria-current="page">Create-Main-Category</li>
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
            <h5 className='text-light text-center bg-primary p-2'>Create-Main-Category <i className="bi bi-arrow-left-circle-fill float-end" onClick={() => { window.history.back() }}></i></h5>
            <form onSubmit={postData}>
              <div className="mb-3">
                <label htmlFor="Name">Name <span className='text-danger'>*</span></label>
                <input type="text" name="name" onChange={getInputData} placeholder='Main Category Name' className='form-control' />
                {show ? <p className='text-danger'>{errmsg}</p> : ""}
              </div>
              <div className="mb-3">
                <button type="submit" className='btn btn-primary w-100'>create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateMainCategory
