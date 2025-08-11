import React from 'react'
import logo from "../../assets/nav/logo.png"

export default function Navbar() {
  return (
    <>

<nav className="navbar navbar-expand-lg  w-100 my-4 mx-auto ">
  <div className="container d-flex justify-content-between">
    <a className="navbar-brand" href="#">

        <img src={logo} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Become a renter</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Rental Deals</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">How It Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Why choose us</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <button className="btn fs-5" type="submit">Sign in</button>
        <button className="btn bg-primary text-light fs-5" type="submit">Sign up</button>
      </form>
    </div>
  </div>
</nav>
      
    </>
  )
}
