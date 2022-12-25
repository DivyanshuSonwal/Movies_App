import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div class="container-fluid">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li class="nav-item">
                <a
                  className="nav-link active fs-4"
                  style={{ color: "whitesmoke" }}
                  href="a"
                >
                  MoviesApp
                </a>
              </li>
            </Link>
            <Link to="/favourites" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <a
                  className="nav-link active fs-4"
                  style={{ color: "whitesmoke" }}
                  href="/"
                >
                  Favourites
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}
