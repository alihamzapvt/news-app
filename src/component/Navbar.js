import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [routers, setRouters] = useState("");
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/business">
                Business
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/health">
                Health
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/sport">
                Sports
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/technology">
                Technology
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/science">
                Science
              </Link>
            </li>
          </ul>
          <label for="cars">Choose any country:</label>

          <select
            name="cars"
            id="cars"
            onChange={(e) => setRouters(e.target.value)}
            // value={routers}
          >
            <option value=""><Link to="/">Us</Link></option>
            <option value=""><Link to="/ru">Russia</Link></option>
            <option value=""><Link to="/nz">japan</Link></option>
            <option value=""><Link to="jp">Newzeland</Link></option>
          </select>
         
            {/* <Link to={routers}></Link> */}
         

          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
