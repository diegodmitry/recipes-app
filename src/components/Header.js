import React from 'react';
import PropTypes from 'prop-types';

function Header({ history }) {
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

Header.propTypes = {
  push: PropTypes.func,
}.isRequired;

export default Header;
