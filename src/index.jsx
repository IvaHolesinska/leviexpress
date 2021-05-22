import React from 'react';
import { render } from 'react-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import './style.css';
import './Header/style.css';
import './Footer/style.css';

const App = () => (
  <>
    <header>
      <Header />
    </header>
    <main></main>
    <footer>
      <Footer />
    </footer>
  </>
);

render(<App />, document.querySelector('#app'));
