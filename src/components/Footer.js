import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import '../pages/style/Footer.css';

function Footer() {
  const history = useHistory();
  return (
    <footer data-testid="footer" className="footer">
      <button
        type="button"
        className="btn-footer"
        onClick={ () => history.push('/drinks') }
      >
        <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="drink-icon" />
      </button>
      <button
        type="button"
        className="btn-footer"
        onClick={ () => history.push('/explore') }
      >
        <img data-testid="explore-bottom-btn" src={ exploreIcon } alt="explore-icon" />
      </button>
      <button
        type="button"
        className="btn-footer"
        onClick={ () => history.push('/foods') }
      >
        <img data-testid="food-bottom-btn" src={ mealIcon } alt="food-icon" />
      </button>
    </footer>
  );
}

export default Footer;
