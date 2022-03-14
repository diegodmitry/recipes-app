import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { ApiFoodById } from '../services/ApiMeals';
import { ApiDrinkRecomendation } from '../services/ApiDrinks';
import shareIcon from '../images/shareIcon.svg';
import './style/DetailsPage.css';

function RecipeDetailsFoods() {
  const history = useHistory();
  const [foodDetail, setFoodDetail] = useState([]);
  const [foodRecomend, setFoodRecomend] = useState([]);
  const [copySuccess, setCopySuccess] = useState('');
  const { id } = useParams();
  const { btnLike } = useContext(MyContext);
  // console.log(history.location.pathname);
  const url = history.location.pathname;

  useEffect(() => {
    async function getId() {
      const result = await ApiFoodById(id);
      return setFoodDetail(result);
    }
    async function getRecomendation() {
      const result = await ApiDrinkRecomendation();
      return setFoodRecomend(result);
    }
    getId();
    getRecomendation();
  }, [id]);
  // console.log(foodDetail);
  console.log(foodRecomend);

  function copying() {
    const doThis = async () => {
      await navigator.clipboard.writeText(url);
      setCopySuccess('Link copied!');
    };
    console.log(copySuccess);
    doThis();
  }
  return (
    <section>
      <h1>Recipe details Foods</h1>
      {foodDetail.map((foods, index) => (
        <div
          className="card"
          key={ foods.idMeal }
        >
          <h4 data-testid="recipe-title">
            {foods.strMeal}
          </h4>
          <button
            type="button"
            data-testid="share-btn"
            onClick={ () => copying() }
          >
            <img
              alt="favorite"
              src={ shareIcon }
            />
          </button>
          { btnLike() }
          <p data-testid="recipe-category">{ foods.strCategory }</p>
          <img
            src={ foods.strMealThumb }
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
            { foods.strMeasure1 }
          </p>
          <p
            data-testid="1-ingredient-name-and-measure"
          >
            { foods.strIngredient2 }
            { foods.strMeasure2 }
          </p>
          <p
            data-testid="2-ingredient-name-and-measure"
          >
            { foods.strIngredient3 }
            { foods.strMeasure3 }
          </p>
          <p
            data-testid="3-ingredient-name-and-measure"
          >
            { foods.strIngredient4 }
            { foods.strMeasure4 }
          </p>
          <p
            data-testid="4-ingredient-name-and-measure"
          >
            { foods.strIngredient5 }
            { foods.strMeasure5 }
          </p>
          <p
            data-testid="5-ingredient-name-and-measure"
          >
            { foods.strIngredient6 }
            { foods.strMeasure6 }
          </p>
          <p
            data-testid="6-ingredient-name-and-measure"
          >
            { foods.strIngredient7 }
            { foods.strMeasure7 }
          </p>
          <p
            data-testid="7-ingredient-name-and-measure"
          >
            { foods.strIngredient8 }
            { foods.strMeasure8 }
          </p>
          <p
            data-testid="8-ingredient-name-and-measure"
          >
            { foods.strIngredient9 }
            { foods.strMeasure9 }
          </p>
          <p
            data-testid="9-ingredient-name-and-measure"
          >
            { foods.strIngredient10 }
            { foods.strMeasure10 }
          </p>
          <p
            data-testid="10-ingredient-name-and-measure"
          >
            { foods.strIngredient11 }
            { foods.strMeasure11 }
          </p>
          <p
            data-testid="11-ingredient-name-and-measure"
          >
            { foods.strIngredient12 }
            { foods.strMeasure12 }
          </p>
          <p
            data-testid="12-ingredient-name-and-measure"
          >
            { foods.strIngredient13 }
            { foods.strMeasure13 }
          </p>
          <p
            data-testid="13-ingredient-name-and-measure"
          >
            { foods.strIngredient14 }
            { foods.strMeasure14 }
          </p>
          <p
            data-testid="14-ingredient-name-and-measure"
          >
            { foods.strIngredient15 }
            { foods.strMeasure15 }
          </p>
          <p
            data-testid="15-ingredient-name-and-measure"
          >
            { foods.strIngredient16 }
            { foods.strMeasure16 }
          </p>
          <p
            data-testid="16-ingredient-name-and-measure"
          >
            { foods.strIngredient17 }
            { foods.strMeasure17 }
          </p>
          <p
            data-testid="17-ingredient-name-and-measure"
          >
            { foods.strIngredient18 }
            { foods.strMeasure18 }
          </p>
          <p
            data-testid="18-ingredient-name-and-measure"
          >
            { foods.strIngredient19 }
            { foods.strMeasure19 }
          </p>
          <p
            data-testid="19-ingredient-name-and-measure"
          >
            { foods.strIngredient20 }
            { foods.strMeasure20 }
          </p>
          <button
            type="button"
            data-testid="start-recipe-btn"
            onClick={ () => history.push(`/foods/${id}/in-progress`) }
            className="start_recipe_btn"
          >
            Start Recipe

          </button>
          <button type="button" data-testid="favorite-btn">favorite</button>
        </div>
      ))}
    </section>
  );
}

export default RecipeDetailsFoods;
