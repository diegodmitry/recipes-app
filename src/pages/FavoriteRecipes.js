import React from 'react';
import Header from '../components/Header';

function FavoriteRecipes() {
  return (
    <section>
      <Header />
      <button type="button">All</button>
      <button type="button">Food</button>
      <button type="button">Drinks</button>
    </section>
  );
}

export default FavoriteRecipes;
