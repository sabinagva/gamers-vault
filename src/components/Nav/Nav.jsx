import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav" style={{ padding: '0px 20px 0px 20px', borderBottom: '5px solid black', marginBottom: '60px' }}>
  <div className="marios"></div>
      <Link to="/home">
        <h2 className="nav-title">Gamer's Vault</h2>
      </Link>
      <div>
      
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            {/* <Link className="navLink" to="/user">
              Home
            </Link> */}

            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}
            <Link className="navLink" to= "/search">
            Search
            </Link>
            <Link className="navLink" to= "/wishlist">
            Wishlist
            </Link>
            <Link className="navLink" to= "/catalog">
            Catalog
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

      
      </div>
    </div>
  );
}

export default Nav;
