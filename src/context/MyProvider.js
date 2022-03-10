import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [inputValue, setInputValue] = useState('');
  const [currentFilter, setCurrentFilter] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log(ingredients);

  const value = {
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
