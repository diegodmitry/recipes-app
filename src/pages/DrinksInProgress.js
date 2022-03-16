import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { ApiDrinkById } from '../services/ApiDrinks';
import shareIcon from '../images/shareIcon.svg';

export default function DrinksInProgress() {
  const history = useHistory();
  const { id } = useParams();
  const { btnLike, copySuccess, setCopySuccess } = useContext(MyContext);
  const [drinkDetail, setDrinkDetail] = useState([]);
  // const [FoodsProgress, setFoodsProgress] = useState([]);
  const [paragraphy, setParagraphy] = useState([]);

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
        // || item[0].includes('strMeasure'));
      console.log('medidas', MeasureName);
      console.log('ingredientes', ingredientsName);
      // const paragraph = {
      //   ingredientsName[index] :
      // };
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
      await navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`);
      setCopySuccess(true);
      return copySuccess;
    };
    doThis();
  }
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
        onClick={ () => history.push('/done-recipes') }
        data-testid="finish-recipe-btn"
      >
        Finish Recipe

      </button>
    </div>
  );
}
