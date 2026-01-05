import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <nav>
          <a href="#">Exclusive</a>
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
          <ul>
            <li>
              <form>
                <input type="text" placeholder="What are you looking for?" />
                <i class="bx  bx-search"></i>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
