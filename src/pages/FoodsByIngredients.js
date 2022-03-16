import React, { useEffect, useState } from 'react';
import { ApiFoodAllIngredients } from '../services/ApiMeals';
import Footer from '../components/Footer';
import Header from '../components/Header';

function FoodsByIngredients() {
  const [allIngredients, setAllIngredients] = useState([]);
  const doze = 12;
  async function requireFoodIngredients() {
    const result = await ApiFoodAllIngredients();
    setAllIngredients(result.slice(0, doze));
    // setAllIngredients(result);
    // console.log('result', result);
  }
  // console.log('allIngredients', allIngredients);

  useEffect(() => {
    requireFoodIngredients();
  }, []);
  return (
    <div>
      <Header />
      <h1>Foods by Ingredients</h1>
      { allIngredients.map((item, index) => (
        <div
          className="card"
          key={ item.idIngredient }
          data-testid={ `${index}-ingredient-card` }
        >
          <h4 data-testid={ `${index}-card-name` }><b>{item.strIngredient}</b></h4>
          <img
            src={ `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png` }
            alt="Avatar"
            style={ { width: '100px' } }
            data-testid={ `${index}-card-img` }
          />
          {/* <h4><b>{item.strDescription}</b></h4> */}
          {/* {console.log(item)}
          {console.log(index)} */}
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default FoodsByIngredients;
