import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function RecipeDetailsDrinks() {
  const { ingredients } = useContext(MyContext);
  return (
    <section>
      <h1>Recipe details Foods</h1>
      {ingredients.map((drinks) => (
        <div
          className="card"
          key={ drinks.idMeal }
        >
          <h4>
            {drinks.strMeal}
          </h4>
          <p>{ drinks.strDrinkAlternate }</p>
          <img
            src={ drinks.strMealThumb }
            alt="ImageCard"
            width="200px"
            height="200px"
          />
          <p>{ drinks.strInstructions }</p>
          <p>{ drinks.strIngredient1 }</p>
          <p>{ drinks.strIngredient2 }</p>
          <p>{ drinks.strIngredient3 }</p>
          <p>{ drinks.strIngredient4 }</p>
          <p>{ drinks.strIngredient5 }</p>
          <p>{ drinks.strIngredient6 }</p>
          <p>{ drinks.strIngredient7 }</p>
          <p>{ drinks.strIngredient8 }</p>
          <p>{ drinks.strIngredient9 }</p>
          <p>{ drinks.strIngredient10 }</p>
          <p>{ drinks.strIngredient11 }</p>
          <p>{ drinks.strIngredient12 }</p>
          <p>{ drinks.strIngredient13 }</p>
          <p>{ drinks.strIngredient14 }</p>
          <p>{ drinks.strIngredient15 }</p>
          <p>{ drinks.strIngredient16 }</p>
          <p>{ drinks.strIngredient17 }</p>
          <p>{ drinks.strIngredient18 }</p>
          <p>{ drinks.strIngredient19 }</p>
          <p>{ drinks.strIngredient20 }</p>
        </div>
      ))}
    </section>
  );
}

export default RecipeDetailsDrinks;
