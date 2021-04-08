import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import { loadProducts, depleteStock, returnToStock } from '../store/products.js';
import { loadCategories } from '../store/categories.js';

const mockStore = configMockStore([thunk]);

describe('test product actions', () => {
  it('load products into the store', () => {

    let store = mockStore({
      products: [],
    });

    return store.dispatch(loadProducts()).then(() => {
      let dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).toEqual('LOAD_PRODUCTS');
      expect(dispatchedActions[0].payload.results).toBeTruthy();
    });
  });

  it('Make an axios.put request to reduce stock by one when product is added to cart', () => {
    let item = {
      "_id": "5f1a52031910080017657ed5",
      "name": "Keyboard",
      "category": "electronics",
      "inStock": 980,
      "price": 100.99,
      "__v": 0,
      "id": "5f1a52031910080017657ed5"
    }

    let store = mockStore({
      products: [{
      "_id": "5f1a52031910080017657ed5",
      "name": "Keyboard",
      "category": "electronics",
      "inStock": 980,
      "price": 100.99,
      "__v": 0,
      "id": "5f1a52031910080017657ed5"
    }],
    });

    return store.dispatch(depleteStock(item)).then(() => {
      let dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).toEqual('DEPLETE_STOCK');
      expect(dispatchedActions[0].payload.name).toEqual('Keyboard');
    });
  });

  it('Make an axios.put request to increase stock by amount removed from cart', () => {
    let item = {
      "_id": "5f1a52031910080017657ed5",
      "name": "Keyboard",
      "category": "electronics",
      "inStock": 980,
      "price": 100.99,
      "__v": 0,
      "id": "5f1a52031910080017657ed5"
    }

    let store = mockStore({
      products: [{
        "_id": "5f1a52031910080017657ed5",
        "name": "Keyboard",
        "category": "electronics",
        "inStock": 980,
        "price": 100.99,
        "__v": 0,
        "id": "5f1a52031910080017657ed5"
      }],
    });

    return store.dispatch(returnToStock(item)).then(() => {
      let dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).toEqual('RETURN_TO_STOCK');
      expect(dispatchedActions[0].payload.name).toEqual('Keyboard');
    });
  });
});

describe('test category actions', () => {
  it('load categories into the store', () => {

    let store = mockStore({
      categories: [],
      activeCategory: '',
      categoryDescription: '',
    });

    return store.dispatch(loadCategories()).then(() => {
      let dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).toEqual('LOAD_CATEGORIES');
      expect(dispatchedActions[0].payload.results).toBeTruthy();
    });
  });

});
