import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ApiDrinkById } from '../services/ApiDrinks';
import { ApiFoodRecomendation } from '../services/ApiMeals';

function RecipeDetailsDrinks() {
  const history = useHistory();
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [drinkRecomend, setDrinkRecomend] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function getId() {
      const result = await ApiDrinkById(id);
      return setDrinkDetails(result);
    }
    async function getRecomendation() {
      const result = await ApiFoodRecomendation();
      return setDrinkRecomend(result);
    }
    getId();
    getRecomendation();
  }, [id]);
  console.log(drinkDetails);
  console.log(drinkRecomend);

  function StartRecipeClick() {
    history.push(`/drinks/${id}/in-progress`);
  }

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
          <button type="button" data-testid="favorite-btn">favoritar</button>
          <p data-testid="recipe-category">{ item.strCategory }</p>
          <p data-testid="recipe-category">{ item.strAlcoholic }</p>
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
              { item.strMeasure1 }
            </p>
            <p
              data-testid="1-ingredient-name-and-measure"
            >
              { item.strIngredient2 }
              { item.strMeasure2 }
            </p>
            <p
              data-testid="2-ingredient-name-and-measure"
            >
              { item.strIngredient3 }
              { item.strMeasure3 }
            </p>
            <p
              data-testid="3-ingredient-name-and-measure"
            >
              { item.strIngredient4 }
              { item.strMeasure4 }
            </p>
            <p
              data-testid="4-ingredient-name-and-measure"
            >
              { item.strIngredient5 }
              { item.strMeasure5 }
            </p>
            <p
              data-testid="5-ingredient-name-and-measure"
            >
              { item.strIngredient6 }
              { item.strMeasure6 }
            </p>
            <p
              data-testid="6-ingredient-name-and-measure"
            >
              { item.strIngredient7 }
              { item.strMeasure7 }
            </p>
            <p
              data-testid="7-ingredient-name-and-measure"
            >
              { item.strIngredient8 }
              { item.strMeasure8 }
            </p>
            <p
              data-testid="8-ingredient-name-and-measure"
            >
              { item.strIngredient9 }
              { item.strMeasure9 }
            </p>
            <p
              data-testid="9-ingredient-name-and-measure"
            >
              { item.strIngredient10 }
              { item.strMeasure10 }
            </p>
            <p
              data-testid="10-ingredient-name-and-measure"
            >
              { item.strIngredient11 }
              { item.strMeasure11 }
            </p>
            <p
              data-testid="11-ingredient-name-and-measure"
            >
              { item.strIngredient12 }
              { item.strMeasure12 }
            </p>
            <p
              data-testid="12-ingredient-name-and-measure"
            >
              { item.strIngredient13 }
              { item.strMeasure13 }
            </p>
            <p
              data-testid="13-ingredient-name-and-measure"
            >
              { item.strIngredient14 }
              { item.strMeasure14 }
            </p>
            <p
              data-testid="14-ingredient-name-and-measure"
            >
              { item.strIngredient15 }
              { item.strMeasure15 }
            </p>
            <p
              data-testid="15-ingredient-name-and-measure"
            >
              { item.strIngredient16 }
              { item.strMeasure16 }
            </p>
            <p
              data-testid="16-ingredient-name-and-measure"
            >
              { item.strIngredient17 }
              { item.strMeasure17 }
            </p>
            <p
              data-testid="17-ingredient-name-and-measure"
            >
              { item.strIngredient18 }
              { item.strMeasure18 }
            </p>
            <p
              data-testid="18-ingredient-name-and-measure"
            >
              { item.strIngredient19 }
              { item.strMeasure19 }
            </p>
            <p
              data-testid="19-ingredient-name-and-measure"
            >
              { item.strIngredient20 }
              { item.strMeasure20 }
            </p>
          </div>
          <button
            type="button"
            data-testid="start-recipe-btn"
            onClick={ StartRecipeClick }
          >
            Start Recipe

          </button>
        </div>
      ))}
    </section>
  );
}

export default RecipeDetailsDrinks;
