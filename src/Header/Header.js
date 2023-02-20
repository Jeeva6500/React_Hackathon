import { Masks } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'
import logo from "./logo.png"
import Logo2 from "./Logo2.PNG"
import logo3 from "./logo3.jpg"


export default function Header() {
  function logout() {
    localStorage.clear("mytoken");
}
const [current, setCurrent] = useState('');

useEffect(() => {
  let status = localStorage.getItem('mytoken');
  setCurrent(status);
  }, [])

  return (
    <div>
       {!localStorage.getItem("mytoken") ?
            <>
      <div>
      <div style={{ backgroundColor: "indigo" }}>
        <nav className="navbar navbar-expand-sm bg-purple ms-4">
          <div className="container-fluid ms-4">
            <a className="navbar-brand ms-4 mb-1 me-6 "></a>
            <div className="collapse navbar-collapse ms-4" id="navbarNav"  >
              <ul className="navbar-nav">
                <li className="nav-item me-4" style={{ color: "white" }}>
                  <a className="nav-link activ ms-4 p-1" aria-current="page" href="/home" style={{ color: "white" }}>Personal</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link p-1" href="#" style={{ color: "white" }}>Premier</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link p-1" href="#" style={{ color: "white" }}>Business</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link p-1" href="#" style={{ color: "white" }}>Corporate & Institutions</a>
                </li>
              </ul>

            </div>
          </div>

         
              <div className="d-grid gap-2 me-2 d-md-flex justify-content-md-end">
                <i className="fa-regular fa-user"></i>
                <a className="nav-link p-1" id="nav-icon" href="/login" type="submit" style={{ color: "white" }} >Login</a>
                <a className="nav-link p-1" id="nav-icon" href="/register" type="submit" style={{ color: "white" }} >Register</a>
              </div>
           

         
            


            </nav>
      </div>
      <nav className="navbar navbar-expand-sm bg-light mb-1">
        <nav className="navbar bg-light">
          <div className="container mb-0">
            <a className="navbar- mb-1 p-1" href="/home">
              <img src={logo} alt="NatWest logo" width="110" height="24" />
            </a>
          </div>
        </nav>
        <div className="container-fluid" >

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item1">
                <a className="nav-link  me-2 p-1" aria-current="page" href="#">Products</a>
              </li>
              <li className="nav-item1">
                <a className="nav-link me-2 p-1" href="#">Help and support</a>
              </li>
              <li className="nav-item1">
                <a className="nav-link me-2 p-1" href="#">You and your money</a>
              </li>

              <li className="nav-item1">
                <a className="nav-link me-2 p-1" href="#">Banking with us</a>
              </li>

              <li className="nav-item1">
                <a className="nav-link me-2 p-1" href="#">Climate</a>
              </li>

              <li className="nav-item1">
                <a className="nav-link me-2 p-1" href="#">Ukraine refugees</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 p-1" type="search" placeholder="Search" aria-label="Search" />

            </form>
          </div>
        </div>
      </nav>
    </div>
    </>
    :null }


{setCurrent}{localStorage.getItem("mytoken") ?
<>
<div style={{ backgroundColor: "indigo" }}>
<nav className="navbar navbar-expand-sm bg-purple mb-2">
        <nav className="navbar ">
          <div className="container mb-0">
            <a className="navbar- mb-1 ">
              <img src={Logo2} alt="NatWest logo2" width="110" height="35" />
            </a>
          </div>
        </nav>
        <div className="container-fluid" >

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item2">
                <a className="nav-link  me-3 p-1 text-light" aria-current="page" href="#">Accounts</a>
              </li>
              <li className="nav-item2">
                <a className="nav-link me-3 p-1 text-light" href="#">Transaction History</a>
              </li>
              <li className="nav-item2">
                <a className="nav-link me-3 p-1 text-light" href="#">Money Transfer</a>
              </li>

              <li className="nav-item2">
                <a className="nav-link me-3 p-1 text-light" href="#">Cards</a>
              </li>

              <li className="nav-item2">
                <a className="nav-link me-3 p-1 text-light" href="#">Enquiry</a>
              </li>

              <li className="nav-item2">
                <a className="nav-link me-3 p-1 text-light" href="#">Profile</a>
              </li>
            </ul>

            <div className="d-grid gap-2 me-2 d-md-flex justify-content-md-end pe-2">
                <i className="fa-regular fa-user"></i>
                <a className="nav-link p-1" id="nav-icon" onClick={logout} type="submit" href='/login' style={{ color: "white" }} >Logout</a>
                </div>

          </div>
        </div>
      </nav>
      </div>
      </>
      :null }
      
    </div>
  )
}

