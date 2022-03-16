import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ApiFoodById } from '../services/ApiMeals';
import shareIcon from '../images/shareIcon.svg';
import MyContext from '../context/MyContext';

export default function FoodsInProgress() {
  const history = useHistory();
  const { id } = useParams();
  const [foodDetail, setFoodDetail] = useState([]);
  const [paragraph, setParagraph] = useState([]);
  const { btnLike } = useContext(MyContext);

  function renderParagraph(result) {
    // if (result[0] !== null || result[0] !== undefined) {
    // const keys = Object.entries(result[0]);
    // const values = Object.values(result[0]);
    // const filteredKeys = keys.filter((item) => (
    //   // item.match(/strIngredient/i) || item.match(/strMeasure/i)
    //   item[0].match(/strIngredient/i) || item[0].match(/strMeasure/i)
    // ));
    // setParagraph(filteredKeys);
    const ingredients = Object.fromEntries(
      Object.entries(result[0]).filter(([key]) => key.match(/strIngredient/i)),
    );
    const measure = Object.fromEntries(
      Object.entries(result[0]).filter(([key]) => key.match(/strMeasure/i)),
    );
    const objetoGeral = { ...ingredients, ...measure };
    console.log('obj', objetoGeral);
    setParagraph([objetoGeral]);
    // }
  }
  // console.log(paragraph);

  useEffect(() => {
    async function getId() {
      const result = await ApiFoodById(id);
      renderParagraph(result);
      return setFoodDetail(result);
    }
    getId();
  }, [id]);

  return (
    <div>
      {foodDetail.map((item) => (
        <div
          className="card"
          key={ item.idMeal }
        >
          <img src={ item.strMealThumb } alt="ImageCard" data-testid="recipe-photo" />
          <h4 data-testid="recipe-title">
            {item.strMeal}
          </h4>
          {btnLike()}
          <button
            type="button"
            data-testid="share-btn"
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
            {/* <p
              data-testid={ `${index}-ingredient-step` }
            >
              {`${item}.strMeasure1`}
              {`${item}.strIngredintet`}
            </p> */}
            { paragraph.map((a) => (
              <p key={ a.strIngredient20 }>{a.strIngredient1}</p>
            ))}
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
