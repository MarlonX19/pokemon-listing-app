import React from "react";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          Pokemon List
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Favorite
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
