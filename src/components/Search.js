import React from 'react';

function Search() {
  return (
    <section>
      <input type="text" data-testid="search-input" />
      <label htmlFor="ingredient">
        Ingredient
        <input
          type="radio"
          name="ingredient"
          id="ingredient"
          data-testid="ingredient-search-radio"
        />
      </label>
      <label htmlFor="name">
        Name
        <input
          type="radio"
          id="name"
          name="name"
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="first-letter">
        First Letter
        <input
          type="radio"
          id="first-letter"
          name="first-letter"
          data-testid="first-letter-search-radio"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </section>
  );
}

export default Search;
