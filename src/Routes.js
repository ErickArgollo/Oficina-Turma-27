import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import CharacterQuotes from './pages/CharacterQuotes';
import Favorites from './pages/Favorites';

export default class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/home" component={ Home } />
          <Route exact path="/quotes/:character" component={ CharacterQuotes} />
          <Route exact path="/favorites" component={ Favorites} />
        </Switch>
        </BrowserRouter>
    )
  }
}
