import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ApiDrinksName } from '../services/ApiDrinks';

function Drinks() {
  async function searchButton() {
    const result = await ApiDrinksName('margarita');
    console.log(result);
  }
  return (
    <section>
      <Header />
      <button
        type="button"
        onClick={ searchButton }
      >
        Click Me
      </button>
      <h1>Main screen drinks</h1>
      <Footer />
    </section>
  );
}

export default Drinks;
