import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <div>
      {/* <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/contact">Contact</Link>&nbsp;&nbsp;&nbsp; */}
      <nav className="navbar navbar-expand-lg" style={{
    backgroundColor: '#e3f2fd'
  }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React.js
          </Link>
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarSupportedContent"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link aria-current="page" className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/student">
                  Student
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
              
              <li className="nav-item">
                <Link aria-disabled="true" className="nav-link disabled">
                  Disabled
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                aria-label="Search"
                className="form-control me-2"
                placeholder="Search"
                type="search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default HeaderComponent;
