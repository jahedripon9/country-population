import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-top-2  border border-dark mb-2">
            <div className="container-fluid ">
              <a className="navbar-brand text-success fs-3" href="/home">World's Population Sarvay</a>
              <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span  className="navbar-toggler-icon "></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a  className="nav-link active bg-dark text-light rounded-pill ms-3" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active bg-dark text-light rounded-pill ms-3" href="/about">About</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active bg-dark text-light rounded-pill ms-3" href="/contact">Contact Us</a>
              </li>
              
            </ul>
            <form  className="d-flex">
              <input  className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
              <button  className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
          </div>
          </nav>
          <div  className='header-info bg-light'>
          <h1  className=" text-center text-primary hover-underline-animation fs-1">World's Countries Population </h1>
          <p  className="text-center fs-4 text-secondary">Countries in the world by population (2021)</p>
          <h3  className="text-center text-black mb-4">World's 250 Countries Population Sarvay</h3>
          </div>
 </div>



    );
};



export default Header;