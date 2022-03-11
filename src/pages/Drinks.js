import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';
import { ApiDrinksName,
  ApiAllCategoryDrink,
  ApiByCategoryDrink,
} from '../services/ApiDrinks';

function Drinks() {
  const NUMBER_TWELVE = 12;
  const NUMBER_FIVE = 5;
  const { ingredients, setIngredients } = useContext(MyContext);
  const [drinkCategory, setDrinkCategory] = useState([]);

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

  async function handleClickCategory({ target }) {
    const result = await ApiByCategoryDrink(target.value);
    // console.log(result);
    console.log(target.value);
    return result;
  }

  return (
    <section>
      <Header />
      {/* <button type="button" onClick={ testAPI }>Clica</button> */}
      {drinkCategory
        .map((item) => (
          <button
            key={ item.strCategory }
            data-testid={ `${item.strCategory}-category-filter` }
            type="button"
            onClick={ handleClickCategory }
          >
            { item.strCategory }
          </button>))}
      <h1>Main screen drinks</h1>
      {ingredients
        .map((drink, index) => (
          <div
            className="card"
            key={ drink.idDrink }
            data-testid={ `${index}-recipe-card` }
          >
            <Link to={ `/drinks/${ingredients[index].idDrink}` }>
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
