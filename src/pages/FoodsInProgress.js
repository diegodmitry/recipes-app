import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ApiFoodById } from '../services/ApiMeals';

export default function FoodsInProgress() {
  const history = useHistory();
  const { id } = useParams();
  const [foodDetail, setFoodDetail] = useState([]);

  useEffect(() => {
    async function getId() {
      const result = await ApiFoodById(id);
      return setFoodDetail(result);
    }
    getId();
  }, [id]);

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
