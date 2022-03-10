import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';
import { ApiMealsName } from '../services/ApiMeals';

function Foods() {
  const NUMBER_TWELVE = 12;
  const { ingredients, setIngredients } = useContext(MyContext);
  useEffect(() => {
    async function initialFetch() {
      const result = await ApiMealsName('');
      const filter = result.slice(0, NUMBER_TWELVE);
      setIngredients(filter);
    }
    initialFetch();
  }, [setIngredients]);
  return (
    <section>
      <Header />
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
