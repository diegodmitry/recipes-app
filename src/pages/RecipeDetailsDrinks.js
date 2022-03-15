import React, { useEffect, useContext, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { ApiDrinkById } from '../services/ApiDrinks';
import { ApiFoodRecomendation } from '../services/ApiMeals';
import MyContext from '../context/MyContext';
import shareIcon from '../images/shareIcon.svg';
import Paragraph from '../components/Paragraph';
import './style/Recomend.css';
import './style/RecipeDetails.css';

function RecipeDetailsDrinks() {
  const history = useHistory();
  const { btnLike,
    copySuccess,
    setCopySuccess,
    drinkDetails,
    setDrinkDetails,
    drinkRecomended,
    setDrinkRecomended,
    NUMBER_SIX,
  } = useContext(MyContext);
  const { id } = useParams();

  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    async function getId() {
      const result = await ApiDrinkById(id);
      return setDrinkDetails(result);
    }
    async function getRecomendation() {
      const result = await ApiFoodRecomendation();
      const filter = result.slice(0, NUMBER_SIX);
      return setDrinkRecomended(filter);
    }
    getId();
    getRecomendation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [NUMBER_SIX, id, setDrinkDetails, setDrinkRecomended]);

  function copyingLink() {
    const doThis = async () => {
      await navigator.clipboard.writeText(`http://localhost:3000/drinks/${id}`);
      setCopySuccess(true);
      // REFERÊNCIA: https://stackoverflow.com/questions/65930199/copy-active-browsers-url-to-clipboard-with-reactjs
    };
    doThis();
  }

  function isStartedFunc() {
    setIsStarted(true);
    history.push(`/drinks/${id}/in-progress`);
  }
  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(isStarted));
  }, [isStarted]);

  return (
    <section className="container-recipes">
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
            <div
              className="containerRecomend"
            >
              <p>Receitas recomendadas</p>
              <div className="cardRecomend">
                {drinkRecomended
                  .map((food, ind) => (
                    <div
                      className="cardRecomend2"
                      key={ food.strMeal }
                      data-testid={ `${ind}-recomendation-card` }
                    >
                      <Link
                        to={ `/foods/${food.idMeal}` }
                      >
                        <img
                          src={ food.strMealThumb }
                          alt="ImageCard"
                          width="100px"
                          data-testid={ `${ind}-card-img` }
                        />
                      </Link>
                      <h4 data-testid={ `${ind}-recomendation-title` }>{food.strMeal}</h4>
                    </div>
                  )) }
              </div>
            </div>
          </div>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          />
          <Paragraph item={ item } />
          <button
            type="button"
            data-testid="start-recipe-btn"
            onClick={ isStartedFunc }
            className="start_recipe_btn"
          >
            { isStarted ? 'Continue Recipe' : 'Start Recipe' }
            Start Recipe
          </button>
        </div>
      ))}
    </section>
  );
}

export default RecipeDetailsDrinks;
