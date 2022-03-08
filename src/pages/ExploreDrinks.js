import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrinks() {
  return (
    <section>
      <Header />
      <button type="button" data-testid="explore-by-ingredient">By Ingredient</button>
      <button type="button" data-testid="explore-surprise">Surprise Me</button>
      <Footer />
    </section>
  );
}

export default ExploreDrinks;
