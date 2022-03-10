import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { ApiMealsIngredient,
  ApiMealsName,
  ApiMealsFirstLetter,
} from '../services/ApiIngredients';

function Search() {
  const { setInputValue, inputValue,
    setIngredients, setCurrentFilter, currentFilter } = useContext(MyContext);

  function ingredientSelect() {
    setCurrentFilter('ingredients');
  }
  function nameSelect() {
    setCurrentFilter('name');
  }
  function firstLetterSelect() {
    setCurrentFilter('firstLetter');
  }
  async function searchButton() {
    if (currentFilter === 'ingredients') {
      const result = await ApiMealsIngredient(inputValue);
      return setIngredients(result);
    }
    if (currentFilter === 'name') {
      const result = await ApiMealsName(inputValue);
      return setIngredients(result);
    }
    if (currentFilter === 'firstLetter' && inputValue.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    if (currentFilter === 'firstLetter') {
      const result = await ApiMealsFirstLetter(inputValue);
      return setIngredients(result);
    }
    return console.log('oi');
  }
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
          onClick={ ingredientSelect }
        />
      </label>
      <label htmlFor="name">
        Name
        <input
          type="radio"
          id="name"
          name="name"
          data-testid="name-search-radio"
          onClick={ nameSelect }
        />
      </label>
      <label htmlFor="first-letter">
        First Letter
        <input
          type="radio"
          id="first-letter"
          name="first-letter"
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
