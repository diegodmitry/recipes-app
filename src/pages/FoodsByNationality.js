import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ApiFoodNationality,
  ApiFoodNationalitySearch, ApiMealsName } from '../services/ApiMeals';

function FoodsByNationality() {
  const NUMBER_TWELVE = 12;
  const [foodNationalitySearch, setFoodNationalitySearch] = useState([]);
  const [foodNationality, setFoodNationality] = useState([]);
  useEffect(() => {
    async function getId() {
      const result = await ApiFoodNationality();
      return setFoodNationality(result);
    }
    async function getIdSearchInitial() {
      const result = await ApiFoodNationalitySearch('american');
      return setFoodNationalitySearch(result);
    }
    getIdSearchInitial();
    getId();
  }, []);

  async function getIdSearch({ target }) {
    if (target.value === 'All') {
      const result = await ApiMealsName('');
      const categoryFilter = result.slice(0, NUMBER_TWELVE);
      return setFoodNationalitySearch(categoryFilter);
    }
    console.log(target.value);
    const result = await ApiFoodNationalitySearch(target.value);
    return setFoodNationalitySearch(result);
  }
  console.log(foodNationalitySearch);
  return (
    <div>
      <Header />
      <h1>Foods by Nationality</h1>
      <select
        data-testid="explore-by-nationality-dropdown"
        onChange={ getIdSearch }
      >
        {foodNationality
          .map((item) => (
            <option
              value={ item.strArea }
              key={ item.strArea }
              data-testid={ `${item.strArea}-option` }
            >
              {item.strArea}
            </option>

          ))}
        <option
          value="All"
          data-testid="All-option"
        >
          All

        </option>
      </select>
      {foodNationalitySearch.map((item, index) => (
        <div
          className="card"
          key={ item.idMeal }
          data-testid={ `${index}-recipe-card` }
        >
          <Link
            to={ `/foods/${item.idMeal}` }
          >
            <img
              src={ item.strMealThumb }
              alt="ImageCard"
              width="200px"
              height="200px"
              data-testid={ `${index}-card-img` }
            />
          </Link>
          <h4 data-testid={ `${index}-card-name` }>{item.strMeal}</h4>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default FoodsByNationality;
