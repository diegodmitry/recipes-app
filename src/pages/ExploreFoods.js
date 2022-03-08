import React from 'react';

function ExploreFoods() {
  return (
    <section>
      <button type="button" data-testid="explore-by-ingredient">By Ingredient</button>
      <button type="button" data-testid="explore-by-nationality">By Nationality</button>
      <button type="button" data-testid="explore-surprise">Surprise Me</button>
    </section>
  );
}

export default ExploreFoods;
