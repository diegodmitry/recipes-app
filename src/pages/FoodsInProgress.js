import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ApiFoodById } from '../services/ApiMeals';

export default function FoodsInProgress() {
  const history = useHistory();
  const { id } = useParams();
  const [foodDetail, setFoodDetail] = useState([]);

  const obj = { meals: { [id]: 'ingredientes' } };

  const [FoodsProgress, setFoodsProgress] = useState([obj]);

  useEffect(() => {
    async function getId() {
      const result = await ApiFoodById(id);
      console.log(result);
      localStorage.setItem('inProgressRecipesFoods', JSON.stringify(FoodsProgress));
      return setFoodDetail(result);
    }
    getId();
  }, [id, FoodsProgress]);
  return (
    <div>
      FoodsInProgress
      {foodDetail.map((item) => (
        <div
          className="card"
          key={ item.idMeal }
        >
          <h4 data-testid="recipe-title">
            {item.strMeal}
          </h4>
        </div>
      ))}
      <button
        type="button"
        onClick={ () => history.push('/done-recipes') }
      >
        Finish Recipe
      </button>
    </div>
  );
}
