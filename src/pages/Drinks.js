import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';

import { ApiDrinksName, ApiAllCategoryDrink, ApiByCategoryDrink }
from '../services/ApiDrinks';

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
      <button
        data-testid="All-category-filter"
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
            key={ item.idDrink }
            type="button"
            onClick={ handleClick }
          >
            { item.strCategory }
          </button>))}
      <h1>Main screen drinks</h1>
      {ingredients
        .map((drink, index) => (
          <div
            className="card"
            key={ drink.strDrink }
            data-testid={ `${index}-recipe-card` }
          >
            <Link
              to={ `/drinks/${drink.idDrink}` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ drink.strDrinkThumb }
                alt="ImageCard"
                width="200px"
                height="200px"
              />
            </Link>
            <p>
              { drink.strCategory }
            </p>
            <h4 data-testid={ `${index}-card-name` }><b>{drink.strDrink}</b></h4>
            <p>{ drink.strAlcoholic }</p>
          </div>)) }
      <Footer />
    </section>
  );
}

export default Drinks;
