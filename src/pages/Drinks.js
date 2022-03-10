import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';

function Drinks() {
  const { ingredients } = useContext(MyContext);
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
