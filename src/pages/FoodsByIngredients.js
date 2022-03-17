import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApiFoodAllIngredients } from '../services/ApiMeals';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/MyContext';

function FoodsByIngredients() {
  const [allIngredients, setAllIngredients] = useState([]);
  const { handleCardBtn } = useContext(MyContext);
  // const [comidas, setComidas] = useState([]);
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
      <h1>Foods by Ingredients</h1>
      { allIngredients.map((item, index) => (
        <Link
          // eslint-disable-next-line react/jsx-no-bind
          onClick={ handleCardBtn }
          key={ item.idIngredient }
          to="/foods"
        >
          <div
            className="card"
            data-testid={ `${index}-ingredient-card` }
          >
            <h4 data-testid={ `${index}-card-name` }><b>{item.strIngredient}</b></h4>
            <img
              src={ `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png` }
              alt={ item.strIngredient }
              style={ { width: '100px' } }
              data-testid={ `${index}-card-img` }
              name={ item.strIngredient }
            />
          </div>
          {/* {item.strIngredient} */}
        </Link>
        // </button>
      ))}
      <Footer />
    </div>
  );
}

export default FoodsByIngredients;
