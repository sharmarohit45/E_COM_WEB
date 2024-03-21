import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Features from './Component/Features';
import Error from './Component/Error';
import Projects from './Component/Projects';
import ServicePage from './Component/ServicePage';
import Testimonial from './Component/Testimonial';
import Members from './Component/Members';

import CreateMainCategory from './Admin/AdminComponent/CreateMainCategory';
import MainCategory from './Admin/AdminComponent/MainCategory';
import SubCategory from './Admin/AdminComponent/SubCategory';
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';
import AdminHome from './Admin/AdminComponent/AdminHome';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/features' element={<Features />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/service' element={<ServicePage />} />
      <Route path='/testimonial' element={<Testimonial />} />
      <Route path='/member' element={<Members />} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/*' element={<Error/>} />
      <Route path='/admin' element={<AdminHome />} />
      <Route path='/admin/maincategory' element={<MainCategory />} />
      <Route path='/admin/maincategory/create' element={<CreateMainCategory />} />
      <Route path='/admin/subcategory' element={<SubCategory />} /> 

      
    </Route>
  )
  )
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
