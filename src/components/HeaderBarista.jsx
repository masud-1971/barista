import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderBarista = () => {
  return (
    <section className="header">
      {/* <div className="logo">
        <h2>Logo</h2>
      </div> */}
<nav className="navbar navbar-expand-lg">
  <div className="container">
      <a className="navbar-brand d-flex align-items-center gap-2" href="#">
        <img
          src="/public/images/coffee-beans.png"
          className="navbar-brand-image img-fluid"
          alt="Barista Cafe Template"
          style={{ width: "32px", height: "32px" }}
        />
        <span className="fw-bold">Barista</span>
      </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav ms-lg-auto">
        <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Home
            </NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink to="/about"
            className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }>
            About
          </NavLink> 
        </li>

        <li className="nav-item">
          <NavLink to="/menu"
            className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
          >Our Menu</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/reviews"
          className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              >Reviews</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/contact"
          className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
          >Contact</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/reservation"
          className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
          >Reservation</NavLink>
        </li>

      </ul>
      {/* <div className="ms-lg-3">
        <a className="btn custom-btn custom-border-btn" href="reservation.html">
          Reservation
          <i className="bi-arrow-up-right ms-2" />
        </a>
      </div> */}
    </div>
  </div>
</nav>

    </section>
  );
};

export default HeaderBarista;
