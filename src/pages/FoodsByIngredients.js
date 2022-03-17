import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApiFoodAllIngredients } from '../services/ApiMeals';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/MyContext';
import './style/Foods.css';

function FoodsByIngredients() {
  const [allIngredients, setAllIngredients] = useState([]);
  const { handleCardBtn } = useContext(MyContext);
  const doze = 12;
  async function requireFoodIngredients() {
    const result = await ApiFoodAllIngredients();
    setAllIngredients(result.slice(0, doze));
  }

  useEffect(() => {
    requireFoodIngredients();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        { allIngredients.map((item, index) => (
          <div
            className="card"
            data-testid={ `${index}-ingredient-card` }
            key={ item.idIngredient }
          >
            <h4 data-testid={ `${index}-card-name` }>{item.strIngredient}</h4>
            <Link
              // eslint-disable-next-line react/jsx-no-bind
              onClick={ handleCardBtn }
              to="/foods"
            >
              <img
                src={ `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png` }
                alt={ item.strIngredient }
                className="imgFood"
                data-testid={ `${index}-card-img` }
                name={ item.strIngredient }
              />
            </Link>
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default FoodsByIngredients;
