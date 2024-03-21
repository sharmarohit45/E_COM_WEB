
import { useEffect, useState } from 'react'
import AdminSidebar from '../AdminSidebar'
import { Link } from 'react-router-dom'

function MainCategory() {
  let [data, setData] = useState([])
  async function deleteRecord(id){
    if(window.confirm("Are You Sure To Delete It ..."))
    {
      let response = await fetch("http://localhost:8000/maincategory/"+id, {
        method: "delete",
        headers: {
          "content-type": "applocation/json"
        }
      })
      response = await response.json()
      getApiData()
    }
  }
  async function getApiData() {
    let response = await fetch("http://localhost:8000/maincategory", {
      method: "get",
      headers: {
        "content-type": "applocation/json"
      }
    })
    response = await response.json()
    setData(response.reverse())

  }
  useEffect(() => {
    getApiData()
  }, [])
  return (
    <>
      {/* <!-- Page Header Start --> */}
      <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <h1 className="display-3 mb-4 animated slideInDown">Main-category</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#">Admin</a></li>
              <li className="breadcrumb-item active"><a href="#">Main-category</a></li>

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
            <h5 className='text-light text-center bg-primary p-2'>Main Category <Link to="/admin/maincategory/create" className='text-light float-end'>+</Link></h5>
            <table className='table table-hover text-center'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th colSpan={2}>update</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) => {
                    return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td><Link to={`/admin/maincategory/update/${item.id}`}><i className='bi bi-pencil-square'></i></Link></td>
                      <td><i className='bi bi-trash text-danger' onClick={()=>deleteRecord(item.id)}></i></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainCategory
