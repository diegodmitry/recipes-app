import React from 'react';
import PropTypes from 'prop-types';
import { ApiDrinkSurprise } from '../services/ApiDrinks';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrinks({ history }) {
  async function supriseDrinkBtn() {
    const result = await ApiDrinkSurprise();
    history.push(`/drinks/${result[0].idDrink}`);
  }

  return (
    <section>
      <Header item="Drinks" />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ supriseDrinkBtn }
      >
        Surprise me!
      </button>
      <Footer />
    </section>
  );
}

ExploreDrinks.propTypes = {
  push: PropTypes.func,
}.isRequired;

export default ExploreDrinks;
