import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function RecipeDetailsFoods() {
  const { ingredients } = useContext(MyContext);
  return (
    <section>
      <h1>Recipe details Foods</h1>
      {ingredients.map((foods) => (
        <div
          className="card"
          key={ foods.idMeal }
        >
          <h4>
            {foods.strMeal}
          </h4>
          <p>{ foods.strDrinkAlternate }</p>
          <img
            src={ foods.strMealThumb }
            alt="ImageCard"
            width="200px"
            height="200px"
          />
          <p>{ foods.strIngredient1 }</p>
          <p>{ foods.strIngredient2 }</p>
          <p>{ foods.strIngredient3 }</p>
          <p>{ foods.strIngredient4 }</p>
          <p>{ foods.strIngredient5 }</p>
          <p>{ foods.strIngredient6 }</p>
          <p>{ foods.strIngredient7 }</p>
          <p>{ foods.strIngredient8 }</p>
          <p>{ foods.strIngredient9 }</p>
          <p>{ foods.strIngredient10 }</p>
          <p>{ foods.strIngredient11 }</p>
          <p>{ foods.strIngredient12 }</p>
          <p>{ foods.strIngredient13 }</p>
          <p>{ foods.strIngredient14 }</p>
          <p>{ foods.strIngredient15 }</p>
          <p>{ foods.strIngredient16 }</p>
          <p>{ foods.strIngredient17 }</p>
          <p>{ foods.strIngredient18 }</p>
          <p>{ foods.strIngredient19 }</p>
          <p>{ foods.strIngredient20 }</p>
        </div>
      ))}
    </section>
  );
}

export default RecipeDetailsFoods;
