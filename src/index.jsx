import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import './style.css';
import './Header/style.css';
import './Footer/style.css';
import Home from './Home/Home';
import Reservation from './Reservation/Reservation';

const App = () => (
  <Router>
    <header>
      <Header />
    </header>

    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/reservation">
        <Reservation />
      </Route>
    </Switch>

    <footer>
      <Footer />
    </footer>
  </Router>
);

render(<App />, document.querySelector('#app'));
