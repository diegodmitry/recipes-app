import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { ApiDrinkById } from '../services/ApiDrinks';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

export default function DrinksInProgress() {
  const history = useHistory();
  const { id } = useParams();
  const { copySuccess, setCopySuccess, isFav, setIsFav } = useContext(MyContext);
  const [drinkDetail, setDrinkDetail] = useState([]);
  const [paragraphy, setParagraphy] = useState([]);

  function setingFavFalse() {
    setIsFav(false);
    const obj = { id,
      type: typeOf,
      nationality: food.strArea,
      category: food.strCategory,
      alcoholicOrNot: '',
      name: food.strMeal,
      image: food.strMealThumb };
    localStorage.setItem('favoriteRecipes', JSON.stringify([obj]));
    const local = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(local[0].id);
  }

  function setingFavTrue() {
    setIsFav(true);
    localStorage.removeItem('favoriteRecipes');
  }

  function btnLike() {
    return (
      isFav ? (
        <button
          type="button"
          className="btn-recipe"
          onClick={ setingFavFalse }
        >
          <img
            data-testid="favorite-btn"
            alt="favorite"
            src={ whiteHeartIcon }
          />
        </button>)
        : (
          <button
            type="button"
            className="btn-recipe"
            onClick={ setingFavTrue }
          >
            <img
              alt="favorite"
              data-testid="favorite-btn"
              src={ blackHeartIcon }
            />
          </button>)
    );
  }

  useEffect(() => {
    async function getId() {
      const result = await ApiDrinkById(id);
      const ingredientsName = Object.entries(result[0])
        .filter((item) => item[0].includes('strIngredient'))
        .filter((item) => item[1] !== '' && item[1] !== ' ' && item[1] !== null)
        .map((item) => item[1]);
      const MeasureName = Object.entries(result[0])
        .filter((item) => item[0].includes('strMeasure'))
        .filter((item) => item[1] !== '' && item[1] !== ' ' && item[1] !== null)
        .map((item) => item[1]);
      console.log('medidas', MeasureName);
      console.log('ingredientes', ingredientsName);
      setParagraphy(ingredientsName);
      // const obj = { meals: { [id]: paragraph } };
      // setFoodsProgress(obj);
      // localStorage.setItem('inProgressRecipes', JSON.stringify(FoodsProgress));
      setDrinkDetail(result);
    }
    getId();
  }, [id]);

  function copyingLink() {
    const doThis = async () => {
      await navigator.clipboard.writeText(`http://localhost:3000/drinks/${id}`);
      setCopySuccess(true);
      return copySuccess;
    };
    doThis();
  }

  // function checkBoxFunc() {
  //   const itemFromLS = JSON.parse(localStorage.getItem());
  //   if(paragraphy.length === itemFromLS)
  //   // console.log(target.checked);
  //   // if (target.checked === true) {
  //   //   setIsChecked(false);
  //   // } else {
  //   //   setIsChecked(true);
  //   // }
  //   // return isChecked;
  // }
  // console.log(paragraphy);

  return (
    <div>
      DrinksInProgress
      {drinkDetail.map((item) => (
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
          <p data-testid="recipe-category">{ item.strCategory }</p>
          <p data-testid="recipe-category">{ item.strAlcoholic }</p>
          <p data-testid="instructions">
            { item.strInstructions }
          </p>
          <div>
            {paragraphy.map((ingrid, index) => (
              <div
                key={ ingrid }
                data-testid={ `${index}-ingredient-step` }
              >
                {`${item[`strIngredient${index + 1}`]}
              : ${item[`strMeasure${index + 1}`]}` }
                <input
                  // onChange={ checkBoxFunc }
                  // checked={ inputChecked }
                  type="checkbox"
                  value={ `${item[`strIngredient${index + 1}`]}
              : ${item[`strMeasure${index + 1}`]}` }
                />
              </div>
            )) }
          </div>
        </div>
      ))}
      <button
        type="button"
        data-testid="finish-recipe-btn"
        // disabled={ isChecked }
        onClick={ () => history.push('/done-recipes') }
      >
        Finish Recipe
      </button>
      {/* { btnFinishRecipe() } */}
    </div>
  );
}
