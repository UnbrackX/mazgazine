import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <nav>
          <a className="logo" href="#">
            Exclusive
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
          <ul className="search_menu">
            <li>
              <form>
                <input type="text" placeholder="What are you looking for?" />
                <i class="bx bx-search"></i>
              </form>
            </li>
            <li>
              <i className="bx bx-heart"></i>
            </li>
            <li>
              <i className="bx bx-cart"></i>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
