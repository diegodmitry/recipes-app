import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

function Explore({ history }) {
  return (
    <div>
      <section>
        <button
          type="button"
          onClick={ () => history.push('/explore/foods') }
          data-testid="explore-foods"
        >
          Explore Foods
        </button>
        <button
          onClick={ () => history.push('/explore/drinks') }
          type="button"
          data-testid="explore-drinks"
        >
          Explore Drinks
        </button>
      </section>
      <Footer />
    </div>
  );
}

Explore.propTypes = {
  push: PropTypes.func,
}.isRequired;

export default Explore;
