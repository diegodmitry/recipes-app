import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';
import { ApiMealsName, ApiCategoryFood, ApiAllCategoryFood } from '../services/ApiMeals';

function Foods() {
  const NUMBER_TWELVE = 12;
  const NUMBER_FIVE = 5;
  const { ingredients, setIngredients } = useContext(MyContext);
  const [foodCategory, setFoodCategory] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('');
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

  async function handleClick({ target }) {
    if (target.name === 'All' || target.name === currentFilter) {
      const result = await ApiMealsName('');
      const categoryFilter = result.slice(0, NUMBER_TWELVE);
      return setIngredients(categoryFilter);
    }
    const result = await ApiAllCategoryFood(target.name);
    const categoryFilter = result.slice(0, NUMBER_TWELVE);
    setCurrentFilter(target.name);
    return setIngredients(categoryFilter);
  }

  return (
    <section>
      <Header />

      <button
        data-testid="All-category-filter"
        name="All"
        type="button"
        onClick={ handleClick }
      >
        All
      </button>
      {foodCategory
        .map((item) => (
          <button
            key={ item.strCategory }
            type="button"
            name={ item.strCategory }
            data-testid={ `${item.strCategory}-category-filter` }
            onClick={ handleClick }
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
            <img
              src={ food.strMealThumb }
              alt="ImageCard"
              width="200px"
              height="200px"
              data-testid={ `${index}-card-img` }
            />
            <h4 data-testid={ `${index}-card-name` }>{food.strMeal}</h4>
          </div>)) }
      <Footer />
    </section>
  );
}

export default Foods;
