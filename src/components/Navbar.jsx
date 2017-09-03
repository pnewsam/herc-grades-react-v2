import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start"></div>
        <div className="navbar-end">
          <a className="navbar-item" href="#">Link</a>
          <a className="navbar-item" href="#">Link</a>
          <a className="navbar-item" href="#">Link</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;