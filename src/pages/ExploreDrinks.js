import React from 'react';
import PropTypes from 'prop-types';
import { ApiDrinkSurprise } from '../services/ApiDrinks';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './style/ExplorePrincipal.css';

function ExploreDrinks({ history }) {
  async function supriseDrinkBtn() {
    const result = await ApiDrinkSurprise();
    history.push(`/drinks/${result[0].idDrink}`);
  }

  return (
    <section>
      <Header item="Drinks" />
      <div className="container-explorer">
        <button
          type="button"
          className="btn-explorer"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
        </button>
        <button
          type="button"
          className="btn-explorer"
          data-testid="explore-surprise"
          onClick={ supriseDrinkBtn }
        >
          Surprise me!
        </button>
        <Footer />
      </div>
    </section>
  );
}

ExploreDrinks.propTypes = {
  push: PropTypes.func,
}.isRequired;

export default ExploreDrinks;
