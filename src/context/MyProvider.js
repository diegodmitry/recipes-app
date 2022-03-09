import React from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const value = {
    handleTitle: 'title',
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
