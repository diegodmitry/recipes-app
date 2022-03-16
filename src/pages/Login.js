import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style/Login.css';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [button, setButton] = useState(true);
  const [password, setPassword] = useState('');

  useEffect(() => {
    function validateInputs() {
      const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const MIN_PASSWORD = 6;
      if (
        email.match(regexEmail)
        && parseFloat(password.length) > MIN_PASSWORD
      ) {
        return setButton(false);
      }
      return setButton(true);
    }
    validateInputs();
  }, [password, email]);

  function handleButton(event) {
    event.preventDefault();
    history.push('/foods');
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
  }

  function handleEmail({ target }) {
    setEmail(target.value);
  }

  return (
    <div className="login">
      <form className="container-login">
        <h1 className="text">Encookado</h1>
        <label htmlFor="email">
          <input
            className="input"
            id="email"
            name="email"
            type="email"
            value={ email }
            onChange={ handleEmail }
            data-testid="email-input"
            placeholder="Email"
          />
        </label>
        <label htmlFor="password">
          <input
            className="input"
            id="password"
            name="password"
            type="password"
            value={ password }
            onChange={ ({ target }) => {
              setPassword(target.value);
            } }
            placeholder="Senha"
            data-testid="password-input"
          />
        </label>
        <button
          disabled={ button }
          data-testid="login-submit-btn"
          onClick={ handleButton }
          type="submit"
          className="btn"
        >
          Enter
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  push: PropTypes.func,
}.isRequired;

export default Login;
