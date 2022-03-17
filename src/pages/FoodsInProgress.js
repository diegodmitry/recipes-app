import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { ApiFoodById } from '../services/ApiMeals';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import './style/InProgress.css';

export default function FoodsInProgress() {
  const history = useHistory();
  const { id } = useParams();
  const { isFav, setIsFav, copySuccess, setCopySuccess } = useContext(MyContext);
  const [foodDetail, setFoodDetail] = useState([]);
  // const [FoodsProgress, setFoodsProgress] = useState([]);
  const [paragraphy, setParagraphy] = useState([]);
  const FIVE = 5;
  useEffect(() => {
    async function getId() {
      const result = await ApiFoodById(id);
      const ingredientsName = Object.entries(result[0])
        .filter((item) => item[0].includes('strIngredient'))
        .filter((item) => item[1] !== '' && item[1] !== ' ' && item[1] !== null)
        .map((item) => item[1]);
      const MeasureName = Object.entries(result[0])
        .filter((item) => item[0].includes('strMeasure'))
        .filter((item) => item[1] !== '' && item[1] !== ' ' && item[1] !== null)
        .map((item) => item[1]);
      console.log('medidas', MeasureName);
      // const paragraph = {
      //   ingredientsName[index] :
      // };
      setParagraphy(ingredientsName);
      // const obj = { meals: { [id]: paragraph } };
      // setFoodsProgress(obj);
      // localStorage.setItem('inProgressRecipes', JSON.stringify(FoodsProgress));
      setFoodDetail(result);
    }
    if (JSON.parse(localStorage.getItem('favoriteRecipes')) !== null) {
      if ((localStorage.getItem('favoriteRecipes')).includes(id)) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
    }
    getId();
  }, [id, setIsFav]);

  function copyingLink() {
    const doThis = async () => {
      await navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`);
      setCopySuccess(true);
      return copySuccess;
    };
    doThis();
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
    <div className="container-recipes">
      {foodDetail.map((item) => (
        <div
          className="card"
          key={ item.idMeal }
        >
          <img
            src={ item.strMealThumb }
            alt="ImageCard"
            data-testid="recipe-photo"
            className="imgFood"
          />
          <h4 data-testid="recipe-title">
            {item.strMeal}
          </h4>
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
          <p data-testid="recipe-category">{ item.strCategory }</p>
          <p data-testid="instructions">
            { item.strInstructions }
          </p>
          {paragraphy.map((ingrid, index) => (
            <div
              key={ ingrid }
              data-testid={ `${index}-ingredient-step` }
            >
              {`${item[`strIngredient${index + 1}`]}
              : ${item[`strMeasure${index + 1}`]}` }
              <input
                type="checkbox"
                value={ `${item[`strIngredient${index + 1}`]}
              : ${item[`strMeasure${index + 1}`]}` }
              />
            </div>

          )) }
        </div>
      ))}
      <button
        type="button"
        data-testid="finish-recipe-btn"
        className="continue_btn"
        onClick={ () => history.push('/done-recipes') }
      >
        Finish Recipe
      </button>
    </div>
  );
}
// Os ingredientes devem possuir o atributo data-testid=${index}-ingredient-step, a verificação será feita pelo length do atributo. esta parte ainda tem que ver...
