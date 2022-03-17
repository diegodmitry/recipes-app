import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ApiFoodNationality,
  ApiFoodNationalitySearch, ApiMealsName } from '../services/ApiMeals';
import './style/Foods.css';

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
      const result = await ApiMealsName('');
      const categoryFilter = result.slice(0, NUMBER_TWELVE);
      return setFoodNationalitySearch(categoryFilter);
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
    const categoryFilter = result.slice(0, NUMBER_TWELVE);
    return setFoodNationalitySearch(categoryFilter);
  }
  console.log('teste', foodNationalitySearch);
  return (
    <div>
      <Header />
      <div className="container">
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
            <h4 data-testid={ `${index}-card-name` }>{item.strMeal}</h4>
            <Link
              to={ `/foods/${item.idMeal}` }
            >
              <img
                src={ item.strMealThumb }
                alt="ImageCard"
                className="imgFood"
                data-testid={ `${index}-card-img` }
              />
            </Link>
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default FoodsByNationality;
