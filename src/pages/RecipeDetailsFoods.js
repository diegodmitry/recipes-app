import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { ApiFoodById } from '../services/ApiMeals';
import Paragraph from '../components/Paragraph';
import { ApiDrinkRecomendation } from '../services/ApiDrinks';
import shareIcon from '../images/shareIcon.svg';
import './style/DetailsPage.css';
import '../components/recomend.css';

// import './style/RecipeDetails.css';

function RecipeDetailsFoods() {
  const NUMBER_SIX = 6;
  const history = useHistory();
  const [foodDetail, setFoodDetail] = useState([]);
  const [foodRecomend, setFoodRecomend] = useState([]);
  const { id } = useParams();

  const { btnLike } = useContext(MyContext);
  // console.log(history.location.pathname);
  const url = history.location.pathname;
  const NUMBER_SIX = 6;

//   const { btnLike, copySuccess,
//     setCopySuccess,
//   } = useContext(MyContext);

  useEffect(() => {
    async function getId() {
      const result = await ApiFoodById(id);
      return setFoodDetail(result);
    }
    async function getRecomendation() {
      const result = await ApiDrinkRecomendation();
      const filter = result.slice(0, NUMBER_SIX);

      return setFoodRecomend(filter);

//       setFoodRecomend(filter);

    }
    getId();
    getRecomendation();
  }, [id]);
  console.log(foodRecomend);
  function copyingLink() {
    const doThis = async () => {
      const url = history.location.pathname;
      await navigator.clipboard.writeText(`http://localhost:3000${url}`);
      setCopySuccess(true);
      return copySuccess;
    };
    doThis();
  }
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
          <div
            className="containerRecomend"
          >
            <p>Receitas recomendadas</p>
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

//           <p
//             data-testid={ `${index}-recomendation-card` }
//           >
//             Receitas recomendadas
//           </p>

          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          />
          <Paragraph foods={ foods } />
          <div className="card-item">
            {foodRecomend.map((drink) => (
              <div
                className="card-items"
                key={ drink.strDrink }
              >
                <Link
                  to={ `/drinks/${drink.idDrink}` }
                >
                  <img
                    src={ drink.strDrinkThumb }
                    alt="ImageCard"
                    className="card-items-img"
                  />
                </Link>
              </div>
            ))}
          </div>
          <button
            type="button"
            data-testid="start-recipe-btn"
            // onClick={}
            className="start_recipe_btn"
          >
            Start Recipe
          </button>
        </div>
      ))}
    </section>
  );
}

export default RecipeDetailsFoods;
