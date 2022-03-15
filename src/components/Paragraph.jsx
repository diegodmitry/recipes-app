import React from 'react';
import PropTypes from 'prop-types';

function Paragraph({ item }) {
  // console.log(item);
  return (
    <>
      {/* <p data-testid="instructions">
        {item.strInstructions}
      </p>
      <iframe title="video" data-testid="video" src="">VIdeo</iframe> */}
      <div>
        <p
          data-testid="0-ingredient-name-and-measure"
        >
          {item.strIngredient1}
          {item.strMeasure1}
        </p>
      </div>
      <p
        data-testid="1-ingredient-name-and-measure"
      >
        {item.strIngredient2}
        {item.strMeasure2}
      </p>
      <p
        data-testid="2-ingredient-name-and-measure"
      >
        {item.strIngredient3}
        {item.strMeasure3}
      </p>
      <p
        data-testid="3-ingredient-name-and-measure"
      >
        {item.strIngredient4}
        {item.strMeasure4}
      </p>
      <p
        data-testid="4-ingredient-name-and-measure"
      >
        {item.strIngredient5}
        {item.strMeasure5}
      </p>
      <p
        data-testid="5-ingredient-name-and-measure"
      >
        {item.strIngredient6}
        {item.strMeasure6}
      </p>
      <p
        data-testid="6-ingredient-name-and-measure"
      >
        {item.strIngredient7}
        {item.strMeasure7}
      </p>
      <p
        data-testid="7-ingredient-name-and-measure"
      >
        {item.strIngredient8}
        {item.strMeasure8}
      </p>
      <p
        data-testid="8-ingredient-name-and-measure"
      >
        {item.strIngredient9}
        {item.strMeasure9}
      </p>
      <p
        data-testid="9-ingredient-name-and-measure"
      >
        {item.strIngredient10}
        {item.strMeasure10}
      </p>
      <p
        data-testid="10-ingredient-name-and-measure"
      >
        {item.strIngredient11}
        {item.strMeasure11}
      </p>
      <p
        data-testid="11-ingredient-name-and-measure"
      >
        {item.strIngredient12}
        {item.strMeasure12}
      </p>
      <p
        data-testid="12-ingredient-name-and-measure"
      >
        {item.strIngredient13}
        {item.strMeasure13}
      </p>
      <p
        data-testid="13-ingredient-name-and-measure"
      >
        {item.strIngredient14}
        {item.strMeasure14}
      </p>
      <p
        data-testid="14-ingredient-name-and-measure"
      >
        {item.strIngredient15}
        {item.strMeasure15}
      </p>
      <p
        data-testid="15-ingredient-name-and-measure"
      >
        {item.strIngredient16}
        {item.strMeasure16}
      </p>
      <p
        data-testid="16-ingredient-name-and-measure"
      >
        {item.strIngredient17}
        {item.strMeasure17}
      </p>
      <p
        data-testid="17-ingredient-name-and-measure"
      >
        {item.strIngredient18}
        {item.strMeasure18}
      </p>
      <p
        data-testid="18-ingredient-name-and-measure"
      >
        {item.strIngredient19}
        {item.strMeasure19}
      </p>
      <p
        data-testid="19-ingredient-name-and-measure"
      >
        {item.strIngredient20}
        {item.strMeasure20}
      </p>
    </>
  );
}

Paragraph.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.any),

}.isRequired;

export default Paragraph;
