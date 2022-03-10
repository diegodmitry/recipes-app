import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';

function Foods() {
  const { ingredients, loading } = useContext(MyContext);
  return (
    <section>
      <Header />
      <h1>Main Screen Foods</h1>
      { loading ? (ingredients.map((food) => (
        <div className="card" key={ food.idMeal }>
          <img src={ food.strMealThumb } alt="ImageCard" width="200px" height="200px" />
          <h4><b>{food.strMeal}</b></h4>
        </div>))) : '' }
      <Footer />
    </section>
  );
}

export default Foods;
