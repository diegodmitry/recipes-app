import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ApiFoodSurprise } from '../services/ApiMeals';
import './style/ExplorePrincipal.css';

function ExploreFoods({ history }) {
  async function supriseFoodBtn() {
    const result = await ApiFoodSurprise();
    history.push(`/foods/${result[0].idMeal}`);
  }

  return (
    <section>
      <Header />
      <div className="container-explorer">
        <button
          type="button"
          className="btn-explorer"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>
        <button
          type="button"
          className="btn-explorer"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </button>
        <button
          type="button"
          className="btn-explorer"
          data-testid="explore-surprise"
          onClick={ supriseFoodBtn }
        >
          Surprise me!
        </button>
        <Footer />
      </div>
    </section>
  );
}

ExploreFoods.propTypes = {
  push: PropTypes.func,
}.isRequired;

export default ExploreFoods;
