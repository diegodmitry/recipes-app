import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import ExplorePrincipal from './pages/ExplorePrincipal';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import DrinksByIngredients from './pages/DrinksByIngredients';
import FoodsByIngredients from './pages/FoodsByIngredients';
import FoodsByNationality from './pages/FoodsByNationality';
import MyProvider from './context/MyProvider';
import RecipeDetailsFoods from './pages/RecipeDetailsFoods';
import RecipeDetailsDrinks from './pages/RecipeDetailsDrinks';
import FoodsInProgress from './pages/FoodsInProgress';
import DrinksInProgress from './pages/DrinksInProgress';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <MyProvider>
          <Route exact path="/" component={ Login } />
          <Route exact path="/explore" component={ ExplorePrincipal } />
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/foods/:id" component={ RecipeDetailsFoods } />
          <Route exact path="/foods/:id/in-progress" component={ FoodsInProgress } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/drinks/:id" component={ RecipeDetailsDrinks } />
          <Route exact path="/drinks/:id/in-progress" component={ DrinksInProgress } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route exact path="/explore/foods" component={ ExploreFoods } />
          <Route
            exact
            path="/explore/foods/ingredients"
            component={ FoodsByIngredients }
          />
          <Route
            exact
            path="/explore/foods/nationalities"
            component={ FoodsByNationality }
          />
          <Route exact path="/explore/drinks" component={ ExploreDrinks } />
          <Route
            exact
            path="/explore/drinks/ingredients"
            component={ DrinksByIngredients }
          />
          <Route
            exact
            path="/explore/drinks/nationalities"
            component={ NotFound }
          />
          {/* ver isso aqui */}
        </MyProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
