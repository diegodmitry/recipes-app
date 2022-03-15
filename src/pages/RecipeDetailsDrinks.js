import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { ApiDrinkById } from '../services/ApiDrinks';
import { ApiFoodRecomendation } from '../services/ApiMeals';
import MyContext from '../context/MyContext';
import shareIcon from '../images/shareIcon.svg';
import './style/RecipeDetails.css';

function RecipeDetailsDrinks() {
  const history = useHistory();
  const NUMBER_SIX = 6;
  const { btnLike, copySuccess, setCopySuccess } = useContext(MyContext);
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [drinkRecomended, setDrinkRecomended] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getId() {
      const result = await ApiDrinkById(id);
      return setDrinkDetails(result);
    }
    async function getRecomendation() {
      const result = await ApiFoodRecomendation();
      const filter = result.slice(0, NUMBER_SIX);
      setDrinkRecomended(filter);
    }
    getId();
    getRecomendation();
  }, [id]);
  console.log(drinkRecomended);

  function StartRecipeClick() {
    history.push(`/drinks/${id}/in-progress`);
  }

  function copyingLink() {
    const doThis = async () => {
      const url = history.location.pathname;
      await navigator.clipboard.writeText(`http://localhost:3000${url}`);
      setCopySuccess(true);
      // REFERÊNCIA: https://stackoverflow.com/questions/65930199/copy-active-browsers-url-to-clipboard-with-reactjs
    };
    doThis();
  }

  return (
    <section>
      {drinkDetails.map((item, index) => (
        <div
          className="card"
          key={ item.idDrink }
        >
          <h4 data-testid="recipe-title">
            {item.strDrink}
          </h4>
          <img
            src={ item.strDrinkThumb }
            alt="ImageCard"
            width="300px"
            height="300px"
            data-testid="recipe-photo"
          />
          <button
            type="button"
            data-testid="share-btn"
            onClick={ () => copyingLink() }
          >
            <img
              alt="favorite"
              src={ shareIcon }
            />
          </button>
          { btnLike() }
          { copySuccess && <span>Link copied!</span>}
          <p data-testid="recipe-category">{ item.strCategory }</p>
          <p data-testid="recipe-category">{ item.strAlcoholic }</p>
          <p data-testid="instructions">
            { item.strInstructions }
          </p>
          <iframe title="video" data-testid="video" src="">Video</iframe>
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
          {drinkRecomended.map((foods) => (
            <div
              className="cardRecomended"
              key={ foods.idMeal }
            >
              <div className="card1">
                <Link
                  to={ `/drinks/${foods.idDrink}` }
                >
                  <img
                    src={ foods.strMealThumb }
                    alt="ImageCard"
                    width="300px"
                    height="300px"
                  />
                </Link>
              </div>
            </div>
          ))}
          <button
            type="button"
            data-testid="start-recipe-btn"
            onClick={ StartRecipeClick }
            className="start_recipe_btn"
          >
            Start Recipe

          </button>
        </div>
      ))}
    </section>
  );
}

export default RecipeDetailsDrinks;
