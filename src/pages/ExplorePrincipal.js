import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './style/ExplorePrincipal.css';

function ExplorePrincipal({ history }) {
  return (
    <section>
      <Header />
      <div className="container-explorer">
        <button
          type="button"
          className="btn-explorer"
          onClick={ () => history.push('/explore/foods') }
          data-testid="explore-foods"
        >
          Explore Foods
        </button>
        <button
          onClick={ () => history.push('/explore/drinks') }
          className="btn-explorer"
          type="button"
          data-testid="explore-drinks"
        >
          Explore Drinks
        </button>
        <Footer />
      </div>
    </section>
  );
}

ExplorePrincipal.propTypes = {
  push: PropTypes.func,
}.isRequired;

export default ExplorePrincipal;
