import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Explore from './pages/Explore';
import Foods from './pages/Foods';
import Profile from './pages/components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/profile" component={ Profile } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
