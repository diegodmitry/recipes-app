import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Search() {
  const { setInputValue, inputValue,
    ingredientSelect,
    nameSelect,
    firstLetterSelect,
    searchButton,
  } = useContext(MyContext);

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
          name="radiosButtons"
          id="ingredient"
          data-testid="ingredient-search-radio"
          onClick={ ingredientSelect }
        />
      </label>
      <label htmlFor="name">
        Name
        <input
          type="radio"
          id="name"
          name="radiosButtons"
          data-testid="name-search-radio"
          onClick={ nameSelect }
        />
      </label>
      <label htmlFor="first-letter">
        First Letter
        <input
          type="radio"
          id="first-letter"
          name="radiosButtons"
          data-testid="first-letter-search-radio"
          onClick={ firstLetterSelect }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ searchButton }
      >
        Search
      </button>
    </section>
  );
}

export default Search;
