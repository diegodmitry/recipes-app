import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from './services/renderWithRouter';
import userEvent from '@testing-library/user-event';


describe('Requisito 2 - Login', () => {
  test('testando os inputs requisito 1', () => {
    const { history } = renderWithRouter(<App />);

    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();

    const buttonInput = screen.getByTestId('login-submit-btn');
    expect(buttonInput).toBeInTheDocument();


    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  test('testando se o botao está desabilitado', () => {
    renderWithRouter(<App />);

    // declaração das variaveis 
    const buttonInput = screen.getByTestId('login-submit-btn');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    
    // testando com os inputs incorretos 
    userEvent.type(emailInput, '' )
    expect(emailInput).toHaveTextContent('');
    userEvent.type(passwordInput, '')
    expect(passwordInput).toHaveTextContent('');

    expect(buttonInput).toBeDisabled();

    // testando com os inputs corretos 
    userEvent.type(emailInput, 'email@email.com' )
    expect(emailInput).toHaveValue('email@email.com');
    userEvent.type(passwordInput, '1234567')
    expect(passwordInput).toHaveValue('1234567');

    expect(buttonInput).toBeEnabled();
  });
})
