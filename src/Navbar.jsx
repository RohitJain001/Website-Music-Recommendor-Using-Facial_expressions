import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar =()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
               
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid nav-top">
    <NavLink className="navbar-brand titlemain text-white m-lg-0" to="/">SPOTIFY</NavLink>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact activeClassName="active-class"  className="   nav-link active text-white" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName="active-class" className="nav-link text-white" to="/about">About</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</div>
       </div>
           </div>
        </>
    );
};
export default Navbar;