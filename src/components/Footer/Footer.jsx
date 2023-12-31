import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <footer>
      <div>
        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
      &copy; Gamer's Vault <i class="nes-icon heart heart"></i>
    </footer>
  );
}

export default Footer;
