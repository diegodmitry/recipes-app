import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';
import Search from './Search';
import '../pages/style/Header.css';

function Header() {
  const [visibleInput, setVisibleInput] = useState(false);
  const [visibleImage, setVisibleImage] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const { location: { pathname } } = history;
    if (pathname === '/explore'
    || pathname === '/explore/foods'
    || pathname === '/explore/foods/ingredients'
    || pathname === '/explore/drinks'
    || pathname === '/explore/drinks/ingredients'
    || pathname === '/profile'
    || pathname === '/done-recipes'
    || pathname === '/favorite-recipes') {
      setVisibleImage(false);
    }
  }, [history]);

  const { location } = useHistory();
  const { pathname } = location;
  function handleTitle() {
    let title = 'Foods';
    if (pathname === '/explore') {
      title = 'Explore';
      return title;
    }
    if (pathname === '/explore/foods') {
      title = 'Explore Foods';
      return title;
    }
    if (pathname === '/explore/drinks') {
      title = 'Explore Drinks';
      return title;
    }
    if (pathname === '/drinks') {
      title = 'Drinks'; return title;
    }
    if (pathname === '/foods') {
      title = 'Foods'; return title;
    }
    if (pathname === '/explore/drinks/ingredients') {
      title = 'Explore Ingredients';
      return title;
    }
    if (pathname === '/explore/foods/ingredients') {
      title = 'Explore Ingredients';
      return title;
    }
    if (pathname === '/explore/foods/nationalities') {
      title = 'Explore Nationalities';
      return title;
    }
    if (pathname === '/profile') {
      title = 'Profile';
      return title;
    }
    if (pathname === '/done-recipes') {
      title = 'Done Recipes';
      return title;
    }
    if (pathname === '/favorite-recipes') {
      title = 'Favorite Recipes';
      return title;
    }
    return title;
  }
  return (
    <header className="header">
      <h1 data-testid="page-title">{handleTitle()}</h1>
      <div className="nav">
        <Link
          to="/profile"
        >
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            className="icons"
            alt="profile-foto"
          />
        </Link>

        { visibleImage && (
          <button
            type="button"
            className="icons button"
            onClick={ () => setVisibleInput((prevVisible) => !prevVisible) }
          >
            <img
              src={ search }
              alt="search-bar"
              data-testid="search-top-btn"
            />
          </button>

        )}

        {visibleInput && (
          <Search />
        )}
      </div>
    </header>
  );
}

export default Header;
