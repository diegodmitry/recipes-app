import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [button, setButton] = useState(true);
  const [password, setPassword] = useState('');

  useEffect(() => {
    function validateInputs() {
      const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const MIN_PASSWORD = 6;
      if (email.match(regexEmail) && parseFloat(password.length) > MIN_PASSWORD) {
        return setButton(false);
      }
      return setButton(true);
    }
    validateInputs();
  }, [password, email]); // verificar depoi

  function handleButton(event) {
    event.preventDefault();
    // console.log('ok');
    // Requisito 6 e 7
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', email);
    // console.log('emial do user:', email);
    // const data = await requestToken();
    // this.setState({ token: data.token }, () => {
    //   callback(this.state);
    // });
    // localStorage.setItem('token', data.token);
    // const { history } = props;
    history.push('/foods');
  }

  return (
    <div className="container">
      <form>
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            value={ email }
            onChange={ ({ target }) => {
              setEmail(target.value);
              // validateInputs();
            } }
            data-testid="email-input"
            placeholder="Email"
          />
        </label>
        Senha
        <label htmlFor="password">
          <input
            id="password"
            name="password"
            type="password"
            value={ password }
            onChange={ ({ target }) => {
              setPassword(target.value);
              // validateInputs();
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
