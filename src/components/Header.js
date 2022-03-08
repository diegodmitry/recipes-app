import React from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();
  return (
    <header>
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={ () => history.push('/profile') }
      >
        Profile
      </button>
      <h1 data-testid="page-title">Foods</h1>
      <button
        type="button"
        data-testid="search-top-btn"
      >
        Search
      </button>
    </header>
  );
}

export default Header;
