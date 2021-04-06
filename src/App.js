import { Provider } from 'react-redux';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Header from './components/header/Header.js';
import Categories from './components/storefront/Categories.js';
import Products from './components/storefront/Products.js';
import './App.css';
import store from './store/index.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Provider store={store()}>
          <Header />
          <Categories />
          <Products />
          {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '75vh' }} /> */}
          <Footer />
        </Provider>
      </Container>
    </React.Fragment>
  );
}

export default App;
