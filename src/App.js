import { Provider } from 'react-redux';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import store from './store-toolkit/index.js';

import Header from './components/header/Header.js';
import ShoppingCart from './components/cart/ShoppingCart.js';
import ProductDetails from './components/products/Details.js';
import SimpleCart from './components/cart/SimpleCart.js';
import Categories from './components/storefront/Categories.js';
import CurrentCategory from './components/storefront/Current-category.js';
import Products from './components/storefront/Products.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Provider store={store}>
          <Header />
                <SimpleCart />
            <Switch>
              <Route path="/products/">
                <ProductDetails />
              </Route>
              <Route path="/cart">
                <ShoppingCart />
              </Route>
              <Route path="/">
                  <Grid container spacing={2}>
                  <Grid item xs={9}>
                <Categories />
                  </Grid>
                  <Grid item xs={9}>
                    <CurrentCategory />
                  </Grid>
                  </Grid>
                <Products />
              </Route>
            </Switch>
          <Footer />
        </Provider>
      </Container>
    </React.Fragment>
  );
}

export default App;
