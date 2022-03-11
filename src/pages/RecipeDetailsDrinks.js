import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function RecipeDetailsDrinks() {
  const { ingredients } = useContext(MyContext);
  return (
    <section>
      <h1>Recipe details Drinks</h1>
      {ingredients.map((foods, index) => (
        <div
          className="card"
          key={ foods.idDrink }
        >
          <h4 data-testid="recipe-title">
            {foods.strDrink}
          </h4>
          <button type="button" data-testid="share-btn">Compartilhar</button>
          <button type="button" ddata-testid="favorite-btn">Compartilhar</button>
          <p data-testid="recipe-category">{ foods.strCategory }</p>
          <img
            src={ foods.strDrinkThumb }
            alt="ImageCard"
            width="200px"
            height="200px"
            data-testid="recipe-photo"
          />
          <p data-testid="instructions">
            { foods.strInstructions }
          </p>
          <iframe title="video" data-testid="video" src="">VIdeo</iframe>
          <p
            data-testid={ `${index}-recomendation-card` }
          >
            Receitas recomendadas
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient1 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient2 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient3 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient4 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient5 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient6 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient7 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient8 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient9 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient10 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient11 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient12 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient13 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient14 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient15 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient16 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient17 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient18 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient19 }
          </p>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { foods.strIngredient20 }
          </p>
          <button type="button" data-testid="start-recipe-btn">Start Recipe</button>
        </div>
      ))}
    </section>
  );
}

export default RecipeDetailsDrinks;
