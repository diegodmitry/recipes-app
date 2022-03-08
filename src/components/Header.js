import React from 'react';
import PropTypes from 'prop-types';

function Header({ history }) {
  function handleClickProfile() {
    history.push('/profile');
  }
  return (
    <header>
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={ handleClickProfile }
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
