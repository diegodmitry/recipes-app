import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Search() {
  const { setInputValue, inputValue,
    setLoading } = useContext(MyContext);
  return (
    <section>
      <input
        type="text"
        data-testid="search-input"
        value={ inputValue }
        onChange={ ({ target }) => setInputValue(target.value) }
      />
      <label htmlFor="ingredient">
        Ingredient
        <input
          type="radio"
          name="ingredient"
          id="ingredient"
          data-testid="ingredient-search-radio"
          onClick={ () => setLoading(true) }
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
