import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbars from './Navbars';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart';
import Default from './Default';
import Account from './Account';
import Auth from './Auth/Auth';
import About from './About';
import BlackSoap from './BlackSoap';
import SheaButter from './SheaButter';
import EssentialOil from './EssentialOil';
import Home from './Home';

import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbars />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/Auth" component={Auth} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Account" component={Account} />
          <Route path="/About" component={About} />
          <Route path="/BlackSoap" component={BlackSoap} />
          <Route path="/SheaButter" component={SheaButter} />
          <Route path="/EssentialOil" component={EssentialOil} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}
