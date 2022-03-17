import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';
import { ApiDrinksName, ApiAllCategoryDrink, ApiByCategoryDrink }
from '../services/ApiDrinks';
import './style/Drinks.css';

function Drinks() {
  const NUMBER_TWELVE = 12;
  const NUMBER_FIVE = 5;
  const { ingredients, setIngredients } = useContext(MyContext);
  const [drinkCategory, setDrinkCategory] = useState([]);
  const [currentFilter, setcurrentFilter] = useState([]);
  useEffect(() => {
    async function getCategoryDrink() {
      const result = await ApiAllCategoryDrink();
      const filter = result.slice(0, NUMBER_FIVE);
      setDrinkCategory(filter);
    }
    async function initialFetch() {
      const result = await ApiDrinksName('');
      const filter = result.slice(0, NUMBER_TWELVE);
      setIngredients(filter);
    }
    initialFetch();
    getCategoryDrink();
  }, [setIngredients]);

  async function handleClick({ target }) {
    if (target.name === 'All' || target.name === currentFilter) {
      const result = await ApiDrinksName('');
      const categoryFilter = result.slice(0, NUMBER_TWELVE);
      return setIngredients(categoryFilter);
    }
    const result = await ApiByCategoryDrink(target.name);
    const categoryFilter = result.slice(0, NUMBER_TWELVE);
    setcurrentFilter(target.name);
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
          {drinkCategory
            .map((item) => (
              <button
                data-testid={ `${item.strCategory}-category-filter` }
                name={ item.strCategory }
                type="button"
                className="category"
                onClick={ handleClick }
                key={ item.idDrink }
              >
                { item.strCategory }
              </button>
            ))}
        </div>
        {ingredients
          .map((drink, index) => (
            <div
              className="card"
              key={ drink.strDrink }
              data-testid={ `${index}-recipe-card` }
            >
              <h4 data-testid={ `${index}-card-name` }><b>{drink.strDrink}</b></h4>
              <Link
                to={ `/drinks/${drink.idDrink}` }
              >
                <img
                  className="imgDrink"
                  data-testid={ `${index}-card-img` }
                  src={ drink.strDrinkThumb }
                  alt="ImageCard"
                />
              </Link>
              <p>
                { drink.strCategory }
              </p>
            </div>)) }
        <Footer />
      </div>
    </section>
  );
}

export default Drinks;
