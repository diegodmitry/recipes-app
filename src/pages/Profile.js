import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

function Profile({ history }) {
  return (
    <div>
      <section>
        <h1>Perfil</h1>
        <h4 data-testid="profile-email">email da pessoa</h4>
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
          onClick={ () => history.push('/') } // limpar todas as chaves do localStorage ao clicar nesse botao
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
