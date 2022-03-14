import React from 'react';
import { useHistory } from 'react-router-dom';

export default function DrinksInProgress() {
  const history = useHistory();
  return (
    <div>
      DrinksInProgress
      <button
        type="button"
        onClick={ () => history.push('/done-recipes') }
      >
        Finish Recipe

      </button>
    </div>
  );
}
