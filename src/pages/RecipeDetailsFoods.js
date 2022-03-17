import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { ApiFoodById } from '../services/ApiMeals';
import Paragrafo from '../components/Paragrafo';
import { ApiDrinkRecomendation } from '../services/ApiDrinks';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import './style/RecipeDetails.css';
import './style/Recomend.css';

function RecipeDetailsFoods() {
  const NUMBER_SIX = 6;
  const history = useHistory();
  const [foodDetail, setFoodDetail] = useState([]);
  const [foodRecomend, setFoodRecomend] = useState([]);
  const { id } = useParams();
  const { copySuccess,
    setCopySuccess,
    isFav, setIsFav,
    buttonChecked,
    setButtonChecked,
  } = useContext(MyContext);
  const [paragraphy, setParagraphy] = useState([]);
  const FIVE = 5;

  useEffect(() => {
    async function getId() {
      const result = await ApiFoodById(id);
      const ingredientsName = Object.entries(result[0])
        .filter((item) => item[0].includes('strIngredient'))
        .filter((item) => item[1] !== '' && item[1] !== ' ' && item[1] !== null)
        .map((item) => item[1]);
      setParagraphy(ingredientsName);
      return setFoodDetail(result);
    }
    async function getRecomendation() {
      const result = await ApiDrinkRecomendation();
      const filter = result.slice(0, NUMBER_SIX);
      setFoodRecomend(filter);
      return setFoodRecomend(filter);
    }
    if (JSON.parse(localStorage.getItem('inProgressRecipes')) !== null) {
      if ((localStorage.getItem('inProgressRecipes')).includes(id)) {
        setButtonChecked(true);
      } else {
        setButtonChecked(false);
      }
    }
    if (JSON.parse(localStorage.getItem('favoriteRecipes')) !== null) {
      if ((localStorage.getItem('favoriteRecipes')).includes(id)) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
    }
    getId();
    getRecomendation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setButtonChecked]);

  function copyingLink() {
    const doThis = async () => {
      await navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`);
      setCopySuccess(true);
      return copySuccess;
    };
    doThis();
  }

  function isStartedFunc() {
    const obj = [{ meals: { [id]: paragraphy } }];
    const obj1 = { meals: { [id]: paragraphy } };
    if (JSON.parse(localStorage.getItem('inProgressRecipes')) !== null) {
      const newObjt = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const progressRecipes = [...newObjt, obj1];
      localStorage.setItem('inProgressRecipes', JSON
        .stringify(progressRecipes));
    }
    if (JSON.parse(localStorage.getItem('inProgressRecipes')) === null) {
      localStorage.setItem('inProgressRecipes', JSON
        .stringify(obj));
    }
    history.push(`/foods/${id}/in-progress`);
  }

  function setingFavorite() {
    const food = foodDetail[0];
    const typeOf = history.location.pathname.slice(1, FIVE);
    const obj = [{ id,
      type: typeOf,
      nationality: food.strArea,
      category: food.strCategory,
      alcoholicOrNot: '',
      name: food.strMeal,
      image: food.strMealThumb }];
    const obj1 = { id,
      type: typeOf,
      nationality: food.strArea,
      category: food.strCategory,
      alcoholicOrNot: '',
      name: food.strMeal,
      image: food.strMealThumb };
    setIsFav(true);
    if (JSON.parse(localStorage.getItem('favoriteRecipes')) !== null) {
      if ((localStorage.getItem('favoriteRecipes')).includes(id)) {
        setIsFav(false);
        const itemWillBeRemoved = JSON.parse(localStorage.getItem('favoriteRecipes'));
        const testando = itemWillBeRemoved.filter((item) => item.id !== id);
        localStorage.setItem('favoriteRecipes', JSON.stringify(testando));
        return;
      }
      const newObjt = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const progressRecipes = [...newObjt, obj1];
      localStorage.setItem('favoriteRecipes', JSON
        .stringify(progressRecipes));
    }
    if (JSON.parse(localStorage.getItem('favoriteRecipes')) === null) {
      // setIsFav(false);
      localStorage.setItem('favoriteRecipes', JSON
        .stringify(obj));
    }
  }

  return (
    <section className="container-recipes">
      {foodDetail.map((foods) => (
        <div
          className="card"
          key={ foods.idMeal }
        >
          <img
            src={ foods.strMealThumb }
            alt="ImageCard"
            width="200px"
            height="200px"
            data-testid="recipe-photo"
          />
          <h4 data-testid="recipe-title">
            {foods.strMeal}
          </h4>
          {/* { btnLike() } */}
          <button
            type="button"
            className="btn-recipe"
            onClick={ setingFavorite }
          >
            <img
              alt="favorite"
              data-testid="favorite-btn"
              src={ isFav ? blackHeartIcon : whiteHeartIcon }
            />
          </button>
          <button
            type="button"
            className="btn-recipe"
            data-testid="share-btn"
            onClick={ () => copyingLink() }
          >
            <img
              alt="favorite"
              src={ shareIcon }
            />
          </button>
          { copySuccess && <span>Link copied!</span>}
          <p data-testid="recipe-category">{ foods.strCategory }</p>
          <div>
            <h4>Instructions</h4>
            <p data-testid="instructions">
              { foods.strInstructions }
            </p>
          </div>
          <iframe title="video" data-testid="video" src="">VIdeo</iframe>
          <div>
            <h4>ingredients</h4>
            <Paragrafo iten={ foods } paragraphy={ paragraphy } />
          </div>
          <div
            className="containerRecomend"
          >
            <h4>
              Receitas recomendadas
            </h4>
            <div className="cardRecomend">
              {foodRecomend
                .map((item, ind) => (
                  <div
                    className="cardRecomend2"
                    key={ item.idDrink }
                    data-testid={ `${ind}-recomendation-card` }
                  >
                    <Link
                      to={ `/drinks/${item.idDrink}` }
                    >
                      <img
                        src={ item.strDrinkThumb }
                        alt="ImageCard"
                        className="recomendImg"
                        data-testid={ `${ind}-card-img` }
                      />
                    </Link>
                    <h5 data-testid={ `${ind}-recomendation-title` }>{item.strDrink}</h5>
                  </div>

                )) }
            </div>
          </div>
          <button
            type="button"
            data-testid="start-recipe-btn"
            onClick={ isStartedFunc }
            className="start_recipe_btn"
          >
            { buttonChecked ? 'Continue Recipe' : 'Start Recipe' }
          </button>
        </div>
      ))}
    </section>
  );
}
export default RecipeDetailsFoods;
