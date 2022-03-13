import React from 'react';
import { useHistory } from 'react-router-dom';

export default function FoodsInProgress() {
  const history = useHistory();
  return (
    <div>
      FoodsInProgress

      <button
        type="button"
        onClick={ () => history.push('/done-recipes') }
      >
        Finish Recipe

      </button>
    </div>
  );
}
