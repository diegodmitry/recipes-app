import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';
import { ApiDrinksName } from '../services/ApiDrinks';

function Drinks() {
  const NUMBER_TWELVE = 12;
  const { ingredients, setIngredients } = useContext(MyContext);
  useEffect(() => {
    async function initialFetch() {
      const result = await ApiDrinksName('');
      const filter = result.slice(0, NUMBER_TWELVE);
      setIngredients(filter);
    }
    initialFetch();
  }, [setIngredients]);
  return (
    <section>
      <Header />
      <h1>Main screen drinks</h1>
      {ingredients
        .map((drink, index) => (
          <div
            className="card"
            key={ drink.idDrink }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ drink.strDrinkThumb }
              alt="ImageCard"
              width="200px"
              height="200px"
            />
            <h4 data-testid={ `${index}-card-name` }><b>{drink.strDrink}</b></h4>
            <p>{ drink.strAlcoholic }</p>
          </div>)) }
      <Footer />
    </section>
  );
}

// Tutu seu lindo vc caiu!!! kkk

export default Drinks;
