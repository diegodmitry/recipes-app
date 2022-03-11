import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile({ history }) {
  function profileButton() {
    history.push('/');
    localStorage.clear();
  }
  const getEMail = () => {
    const emailUser = JSON.parse(localStorage.getItem('user'));
    return (
      emailUser.email
    );
  };

  return (
    <div>
      <section>
        <Header />
        <h4
          data-testid="profile-email"
        >
          Your Email:
          { ' ' }
          {localStorage.getItem('user') ? getEMail() : 'Email não encontrado'}
        </h4>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ profileButton } // limpar todas as chaves do localStorage ao clicar nesse botao
        >
          Logout
        </button>
      </section>
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  push: PropTypes.func,
}.isRequired;

export default Profile;
