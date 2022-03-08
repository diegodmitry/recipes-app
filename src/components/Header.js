import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';

function Header() {
  return (
    <header>
      <Link
        to="/profile"
      >
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile-foto"
        />
      </Link>
      <h1 data-testid="page-title">Foods</h1>
      <Link
        to="/search"
      >
        <img
          src={ search }
          alt="search-bar"
          data-testid="search-top-btn"
        />
      </Link>
    </header>
  );
}

export default Header;
