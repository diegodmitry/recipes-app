import React from 'react';
import Footer from '../components/Footer';

function ExploreDrinks() {
  return (
    <div>
      <section>
        <button type="button" data-testid="explore-by-ingredient">By Ingredient</button>
        <button type="button" data-testid="explore-surprise">Surprise Me</button>
      </section>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
