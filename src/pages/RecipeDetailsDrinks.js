import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ApiDrinkById } from '../services/ApiDrinks';

function RecipeDetailsDrinks() {
  const [drinkDetails, setDrinkDetails] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function getId() {
      const result = await ApiDrinkById(id);
      return setDrinkDetails(result);
    }
    getId();
  }, [id]);
  return (
    <section>
      <h1>Recipe details Drinks</h1>
      {drinkDetails.map((item, index) => (

        <div
          className="card"
          key={ item.idDrink }
        >
          <h4 data-testid="recipe-title">
            {item.strDrink}
          </h4>
          <button type="button" data-testid="share-btn">Compartilhar</button>
          <button type="button" ddata-testid="favorite-btn">Compartilhar</button>
          <p data-testid="recipe-category">{ item.strCategory }</p>
          <img
            src={ item.strDrinkThumb }
            alt="ImageCard"
            width="200px"
            height="200px"
            data-testid="recipe-photo"
          />
          <p data-testid="instructions">
            { item.strInstructions }
          </p>
          <iframe title="video" data-testid="video" src="">VIdeo</iframe>
          <div>
            <p
              data-testid={ `${index}-recomendation-card` }
            >
              Receitas recomendadas
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient1 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient2 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient3 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient4 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient5 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient6 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient7 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient8 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient9 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient10 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient11 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient12 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient13 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient14 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient15 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient16 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient17 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient18 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient19 }
            </p>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item.strIngredient20 }
            </p>
          </div>

          <button type="button" data-testid="start-recipe-btn">Start Recipe</button>
          <button type="button" data-testid="favorite-btn">Favorite</button>
        </div>
      ))}
    </section>
  );
}

export default RecipeDetailsDrinks;
