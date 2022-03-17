import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';
import { ApiMealsName, ApiCategoryFood, ApiAllCategoryFood } from '../services/ApiMeals';
import './style/Foods.css';

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setIngredients]);

  async function handleClick({ target }) {
    if (target.name === 'All' || target.name === currentFilter) {
      const result = await ApiMealsName('');
      const categoryFilter = result.slice(0, NUMBER_TWELVE);
      return setIngredients(categoryFilter);
    }
    const result = await ApiAllCategoryFood(target.name);
    const categoryFilter = result.slice(0, NUMBER_TWELVE);
    console.log('teste', categoryFilter);
    setCurrentFilter(target.name);
    return setIngredients(categoryFilter);
  }

  return (
    <section>
      <Header />
      <div className="container">
        <div className="categorys">
          <button
            data-testid="All-category-filter"
            className="category"
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
                className="category"
                data-testid={ `${item.strCategory}-category-filter` }
                onClick={ handleClick }
              >
                { item.strCategory }
              </button>))}
        </div>
        {ingredients
          .map((food, index) => (
            <div
              className="card"
              key={ food.idMeal }
              data-testid={ `${index}-recipe-card` }
            >
              <h4 data-testid={ `${index}-card-name` }>{food.strMeal}</h4>
              <Link
                to={ `/foods/${food.idMeal}` }
              >
                <img
                  src={ food.strMealThumb }
                  alt="ImageCard"
                  className="imgFood"
                  data-testid={ `${index}-card-img` }
                />
              </Link>
            </div>)) }
        <Footer />
      </div>
    </section>
  );
}

export default Foods;
