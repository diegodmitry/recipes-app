import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function Paragrafo({ iten, paragraphy }) {
  const [render, setRender] = useState(true);
  const history = useHistory();
  const { location: { pathname } } = history;

  useEffect(() => {
    function renderMethod() {
      if (pathname.includes('in-progress')) {
        return setRender(false);
      }
    }
    renderMethod();
  }, [pathname]);

  return (
    <div>
      {render ? ('') : null}
      {paragraphy.map((item, index) => (
        <p
          key={ item }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          {`${iten[`strIngredient${index + 1}`]}: ${iten[`strMeasure${index + 1}`]}`}
        </p>
      )) }

    </div>
  // usei o index + 1, pois não existe strIngredient0, e o index começa no 0.
  );
}

Paragrafo.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.any),

}.isRequired;

export default Paragrafo;
