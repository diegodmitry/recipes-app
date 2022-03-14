import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MyContext from './MyContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { ApiMealsIngredient,
  ApiMealsName,
  ApiMealsFirstLetter,
} from '../services/ApiMeals';
import { ApiIngredientsDrinks,
  ApiDrinksName,
  ApiDrinksFirstLetter,
} from '../services/ApiDrinks';

function MyProvider({ children }) {
  const [inputValue, setInputValue] = useState('');
  const [currentFilter, setCurrentFilter] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFav, setIsFav] = useState(true);
  const NUMBER_ONE = 1;
  const NUMBER_TWELVE = 12;
  const firstLetter = 'firstLetter';
  const stringName = 'name';
  const ingredientName = 'ingredients';

  const history = useHistory();
  const { location: { pathname } } = history;

  function ingredientSelect() {
    setCurrentFilter('ingredients');
  }
  function nameSelect() {
    setCurrentFilter(stringName);
  }
  function firstLetterSelect() {
    setCurrentFilter(firstLetter);
  }

  function btnLike() {
    return (
      isFav ? (
        <button
          type="button"
          onClick={ () => setIsFav(false) }
        >
          <img
            data-testid="favorite-btn"
            alt="favorite"
            src={ whiteHeartIcon }
          />
        </button>)
        : (
          <button
            type="button"
            onClick={ () => setIsFav(true) }
          >
            <img
              alt="favorite"
              data-testid="favorite-btn"
              src={ blackHeartIcon }
            />
          </button>)
    );
  }

  async function handleCheckDrink() {
    const result = await ApiDrinksName(inputValue);
    if (result === null) {
      const string = 'Sorry, we haven\'t found any recipes for these filters.';
      return global.alert(string);
    }
    if (result.length === NUMBER_ONE) {
      return history.push(`/drinks/${result[0].idDrink}`);
    }
    if (result.length > NUMBER_ONE) {
      const filter = result.slice(0, NUMBER_TWELVE);
      return (setIngredients(filter));
    }
  }

  async function handleCheckFood() {
    const result = await ApiMealsName(inputValue);
    if (result === null) {
      const string = 'Sorry, we haven\'t found any recipes for these filters.';
      return global.alert(string);
    }
    if (result.length === NUMBER_ONE) {
      return history.push(`/foods/${result[0].idMeal}`);
    }
    if (result.length > NUMBER_ONE) {
      const filter = result.slice(0, NUMBER_TWELVE);
      return (setIngredients(filter));
    }
  }

  async function searchDrinks() {
    if (pathname === '/drinks') {
      if (currentFilter === ingredientName) {
        const result = await ApiIngredientsDrinks(inputValue);
        return setIngredients(result);
      }
      if (currentFilter === stringName) {
        handleCheckDrink();
      }
      if (currentFilter === firstLetter && inputValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      if (currentFilter === firstLetter) {
        const result = await ApiDrinksFirstLetter(inputValue);
        return setIngredients(result);
      }
    }
  }

  async function searchFoods() {
    if (pathname === '/foods') {
      if (currentFilter === ingredientName) {
        const result = await ApiMealsIngredient(inputValue);
        return setIngredients(result);
      }
      if (currentFilter === stringName) {
        handleCheckFood();
      }
      if (currentFilter === firstLetter && inputValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      if (currentFilter === firstLetter) {
        const result = await ApiMealsFirstLetter(inputValue);
        return setIngredients(result);
      }
    }
  }

  async function searchButton() {
    searchDrinks();
    searchFoods();
  }

  const value = {
    btnLike,
    ingredientSelect,
    nameSelect,
    firstLetterSelect,
    searchButton,
    setIngredients,
    ingredients,
    setInputValue,
    inputValue,
    loading,
    setLoading,
    currentFilter,
    setCurrentFilter,
  };

  return (
    <MyContext.Provider value={ value }>
      { children }
    </MyContext.Provider>
  );
}

export default MyProvider;

MyProvider.propTypes = {
  children: PropTypes.objectOf,
}.isRequired;
