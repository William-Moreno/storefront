import { Provider } from 'react-redux';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';

import Header from './components/header/Header.js';
import Categories from './components/storefront/Categories.js';
import Products from './components/storefront/Products.js';
import store from './store/index.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Provider store={store()}>
          <Header />
          <Categories />
          <Products />
          <Footer />
        </Provider>
      </Container>
    </React.Fragment>
  );
}

export default App;
