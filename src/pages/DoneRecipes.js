import React from 'react';
import Header from '../components/Header';

function DoneRecipes() {
  return (
    <section>
      <Header />
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
    </section>
  );
}

export default DoneRecipes;
