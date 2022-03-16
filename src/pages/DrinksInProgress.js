import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import { ApiFoodById } from '../services/ApiMeals';
import { ApiDrinkById } from '../services/ApiDrinks';
import shareIcon from '../images/shareIcon.svg';
import MyContext from '../context/MyContext';

export default function DrinksInProgress() {
  const history = useHistory();
  const { id } = useParams();
  const [drinkDetail, setDrinkDetail] = useState([]);
  const { btnLike } = useContext(MyContext);

  useEffect(() => {
    async function getId() {
      const result = await ApiDrinkById(id);
      return setDrinkDetail(result);
    }
    getId();
  }, [id]);

  return (
    <div>
      Drinks In Progres
      {drinkDetail.map((item) => (
        <div
          className="card"
          key={ item.idDrink }
        >
          <img src={ item.strDrinkThumn } alt="ImageCard" data-testid="recipe-photo" />
          <h4 data-testid="recipe-title">
            {item.strDrink}
          </h4>
          {btnLike()}
          <button
            type="button"
            data-testid="share-btn"
            onClick={ console.log('share btn') }
          >
            <img
              alt="share_icon"
              src={ shareIcon }
            />
          </button>
          <p data-testid="recipe-category">{ item.strCategory }</p>
          <div>
            <h4>Instructions</h4>
            <p data-testid="instructions">{ item.strInstructions }</p>
            <p
              data-testid="1-ingredient-step"
            >
              {item.strMeasure}
              {item.strIngredient1}
            </p>
            <p
              data-testid="2-ingredient-step"
            >
              {item.strIngredient2}
              {item.strMeasure2}
            </p>
            <p
              data-testid="3-ingredient-step"
            >
              {item.strIngredient3}
              {item.strMeasure3}
            </p>
            <p
              data-testid="4-ingredient-step"
            >
              {item.strIngredient4}
              {item.strMeasure4}
            </p>
            <p
              data-testid="5-ingredient-step"
            >
              {item.strIngredient5}
              {item.strMeasure5}
            </p>
            <p
              data-testid="6-ingredient-step"
            >
              {item.strIngredient6}
              {item.strMeasure6}
            </p>
            <p
              data-testid="7-ingredient-step"
            >
              {item.strIngredient7}
              {item.strMeasure7}
            </p>
            <p
              data-testid="8-ingredient-step"
            >
              {item.strIngredient8}
              {item.strMeasure8}
            </p>
            <p
              data-testid="9-ingredient-step"
            >
              {item.strIngredient9}
              {item.strMeasure9}
            </p>
            <p
              data-testid="10-ingredient-step"
            >
              {item.strIngredient10}
              {item.strMeasure10}
            </p>
            <p
              data-testid="11-ingredient-step"
            >
              {item.strIngredient11}
              {item.strMeasure11}
            </p>
            <p
              data-testid="12-ingredient-step"
            >
              {item.strIngredient12}
              {item.strMeasure12}
            </p>
            <p
              data-testid="13-ingredient-step"
            >
              {item.strIngredient13}
              {item.strMeasure13}
            </p>
            <p
              data-testid="14-ingredient-step"
            >
              {item.strIngredient14}
              {item.strMeasure14}
            </p>
            <p
              data-testid="15-ingredient-step"
            >
              {item.strIngredient15}
              {item.strMeasure15}
            </p>
            <p
              data-testid="16-ingredient-step"
            >
              {item.strIngredient16}
              {item.strMeasure16}
            </p>
            <p
              data-testid="17-ingredient-step"
            >
              {item.strIngredient17}
              {item.strMeasure17}
            </p>
            <p
              data-testid="18-ingredient-step"
            >
              {item.strIngredient18}
              {item.strMeasure18}
            </p>
            <p
              data-testid="19-ingredient-step"
            >
              {item.strIngredient19}
              {item.strMeasure19}
            </p>
            <p
              data-testid="20-ingredient-step"
            >
              {item.strIngredient20}
              {item.strMeasure20}
            </p>
          </div>
        </div>
      ))}
      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ () => history.push('/done-recipes') }
      >
        Finish Recipe
      </button>
    </div>
  );
}
