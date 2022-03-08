import React from 'react';
import Footer from '../components/Footer';

function ExploreFoods() {
  return (
    <div>
      <section>
        <button type="button" data-testid="explore-by-ingredient">By Ingredient</button>
        <button type="button" data-testid="explore-by-nationality">By Nationality</button>
        <button type="button" data-testid="explore-surprise">Surprise Me</button>
      </section>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
