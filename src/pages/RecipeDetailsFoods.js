import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { ApiFoodById } from '../services/ApiMeals';
import Paragraph from '../components/Paragraph';
import { ApiDrinkRecomendation } from '../services/ApiDrinks';
import shareIcon from '../images/shareIcon.svg';
import './style/RecipeDetails.css';
import './style/Recomend.css';

function RecipeDetailsFoods() {
  const NUMBER_SIX = 6;
  const history = useHistory();
  const [foodDetail, setFoodDetail] = useState([]);
  const [foodRecomend, setFoodRecomend] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const { id } = useParams();
  const { btnLike, copySuccess, setCopySuccess } = useContext(MyContext);

  useEffect(() => {
    async function getId() {
      const result = await ApiFoodById(id);
      return setFoodDetail(result);
    }
    async function getRecomendation() {
      const result = await ApiDrinkRecomendation();
      const filter = result.slice(0, NUMBER_SIX);
      setFoodRecomend(filter);
      return setFoodRecomend(filter);
    }
    getId();
    getRecomendation();
  }, [id]);

  function copyingLink() {
    const doThis = async () => {
      await navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`);
      setCopySuccess(true);
      return copySuccess;
    };
    doThis();
  }

  function isStartedFunc() {
    setIsStarted(true);
    history.push(`/foods/${id}/in-progress`);
  }
  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(isStarted));
  }, [isStarted]);

  // function handleStartFood() {
  //   history.push(`/foods/${id}/in-progress`);
  //   handleStartBtn();
  //   const obj = {
  //       meals: {
  //           foodDetail[0]: [lista-de-ingredientes-utilizados],
  //       }
  //   };
  //   localStorage.setItem('inProgressRecipes', JSON.stringify([obj]));
  // }
  return (
    <section className="container-recipes">
      {foodDetail.map((foods, index) => (
        <div
          className="card"
          key={ foods.idMeal }
        >
          <h4 data-testid="recipe-title">
            {foods.strMeal}
          </h4>
          <img
            src={ foods.strMealThumb }
            alt="ImageCard"
            width="200px"
            height="200px"
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
          <p data-testid="recipe-category">{ foods.strCategory }</p>
          <p data-testid="instructions">
            { foods.strInstructions }
          </p>
          <iframe title="video" data-testid="video" src="">VIdeo</iframe>
          <div
            className="containerRecomend"
          >
            <p>
              Receitas recomendadas
            </p>
            <div className="cardRecomend">
              {foodRecomend
                .map((food, ind) => (
                  <div
                    className="cardRecomend2"
                    key={ food.idDrink }
                    data-testid={ `${ind}-recomendation-card` }
                  >
                    <Link
                      to={ `/drinks/${food.idDrink}` }
                    >
                      <img
                        src={ food.strDrinkThumb }
                        alt="ImageCard"
                        width="100px"
                        data-testid={ `${ind}-card-img` }
                      />
                    </Link>
                    <h4 data-testid={ `${ind}-recomendation-title` }>{food.strDrink}</h4>
                  </div>

                )) }
            </div>
          </div>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          />
          <Paragraph item={ foods } />
          <button
            type="button"
            data-testid="start-recipe-btn"
            onClick={ isStartedFunc }
            className="start_recipe_btn"
          >
            { isStarted ? 'Continue Recipe' : 'Start Recipe' }
          </button>
        </div>
      ))}
    </section>
  );
}
export default RecipeDetailsFoods;
