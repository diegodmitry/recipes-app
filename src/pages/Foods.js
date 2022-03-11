import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';
import { ApiMealsName, ApiCategoryFood } from '../services/ApiMeals';

function Foods() {
  const NUMBER_TWELVE = 12;
  const NUMBER_FIVE = 5;
  const { ingredients, setIngredients } = useContext(MyContext);
  const [foodCategory, setFoodCategory] = useState([]);
  useEffect(() => {
    async function getCategoryFood() {
      const result = await ApiCategoryFood();
      const filter = result.slice(0, NUMBER_FIVE);
      setFoodCategory(filter);
    }
    async function initialFetch() {
      const result = await ApiMealsName('');
      const filter = result.slice(0, NUMBER_TWELVE);
      setIngredients(filter);
    }
    initialFetch();
    getCategoryFood();
  }, [setIngredients]);

  return (
    <section>
      <Header />
      {foodCategory
        .map((item) => (
          <button
            key={ item.strCategory }
            type="button"
            data-testid={ `${item.strCategory}-category-filter` }
          >
            { item.strCategory }
          </button>))}
      <h1>Main Screen Foods</h1>
      {ingredients
        .map((food, index) => (
          <div
            className="card"
            key={ food.idMeal }
            data-testid={ `${index}-recipe-card` }
          >
            <Link to={ `/foods/${ingredients[index].idMeal}` }>
              <img
                src={ food.strMealThumb }
                alt="ImageCard"
                width="200px"
                height="200px"
                data-testid={ `${index}-card-img` }
              />
            </Link>
            <h4 data-testid={ `${index}-card-name` }>{food.strMeal}</h4>
          </div>)) }
      <Footer />
    </section>
  );
}

export default Foods;
