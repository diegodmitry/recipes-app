import React, { useEffect, useState } from 'react';
import { ApiDrinkAllIngredients } from '../services/ApiDrinks';
import Footer from '../components/Footer';
import Header from '../components/Header';

function DrinksByIngredients() {
  const [allIngredients, setAllIngredients] = useState([]);
  const doze = 12;
  async function requireDrinksIngredients() {
    const result = await ApiDrinkAllIngredients();
    setAllIngredients(result.slice(0, doze));
  }
  console.log('allIngredients', allIngredients);

  useEffect(() => {
    requireDrinksIngredients();
  }, []);

  return (
    <div>
      <Header />
      <h1>Drinks by Ingredients</h1>
      { allIngredients.map((item, index) => (
        <div
          className="card"
          key={ item.idIngredient1 }
          data-testid={ `${index}-ingredient-card` }
        >
          <h4
            // key={ item.idIngredient1 }
            data-testid={ `${index}-card-name` }
          >
            <b>
              {item.strIngredient1}
            </b>

          </h4>
          <img
            src={ `https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}-Small.png` }
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

export default DrinksByIngredients;
