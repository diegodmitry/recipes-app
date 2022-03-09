import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [inputValue, setInputValue] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);

  const ApiIngredients = async (item) => {
    const linkIngredient = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${item}`;
    try {
      const response = await fetch(linkIngredient);
      const data = await response.json();
      return data.meals;
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    const handleChangeIngredient = async () => {
      const returnIngredients = await ApiIngredients(inputValue);
      setIngredients(returnIngredients);
    };
    handleChangeIngredient();
  }, [inputValue]);

  console.log(ingredients);

  const value = {
    handleChangeIngredient,
    setIngredients,
    ingredients,
    setInputValue,
    inputValue,
    loading,
    setLoading,
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
