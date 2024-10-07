import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <div className="px-3 py-1 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className='d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none'><img src={logo} alt="Logo" width="130px"  /></a>
          <ul className="nav">
            <li className="nav-item border-end">
              <a href="/" className="nav-link link-body-emphasis px-2"><button className="nav-link link-body-emphasis px-2">
                Find Job
              </button></a>
            </li>
            <li className="nav-item">
              <a href="/new/job" className="nav-link link-body-emphasis px-2 text-primary cursor-pointer"><button className="nav-link link-body-emphasis px-2 text-primary cursor-pointer">
                Post Job
              </button></a>
            </li>
          </ul>

        </div>
      </div>
    </div>

  )
}

export default Header
