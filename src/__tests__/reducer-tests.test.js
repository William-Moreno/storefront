
import CartReducer from '../store/cart.js';
import CategoriesReducer from '../store/categories.js';
import ProductsReducer from '../store/products.js';

describe('Testing reducer components', () => {
  it('Should successfully add a product to the cart using CartReducer', () => {
    let product = {
      "id": "5f1a51f71910080017657ed3",
      "name": "Monitor",
      "category": "electronics",
      "inStock": 954,
      "price": 100.99,
      "__v": 0
    };

    let initialState = {
  cart: [],
  cartCount: 0,
};

    let newState = CartReducer(initialState, { type:'ADD_TO_CART', payload: product});

    expect(newState.cartCount).toEqual(1);
    expect(newState.cart).toEqual([product]);
  });

  it('Should successfully reduce a product\'s inventory when using ProductsReducer', () => {
    let product = {
      "id": "5f1a51f71910080017657ed3",
      "name": "Monitor",
      "category": "electronics",
      "inStock": 954,
      "price": 100.99,
      "__v": 0
    };

    let initialState = {
      products: [
        {
      "id": "5f1a51f71910080017657ed3",
      "name": "Monitor",
      "category": "electronics",
      "inStock": 954,
      "price": 100.99,
      "__v": 0
    },
      ]
    };

    let newState = ProductsReducer(initialState, { type:'ADD_TO_CART', payload: product});

    expect(newState.products[0].inStock).toEqual(953);
  });

  it('Should successfully change the active category when using CategoriesReducer', () => {
    let category = {
      "id": "5f0cdc25acac790017fc26cf",
      "name": "electronics",
      "description": "Making your life easier, one volt at a time",
      "__v": 0
    };

    let initialState = {
      categories: [],
      activeCategory: '',
      categoryDescription: '',

    }

    let newState = CategoriesReducer(initialState, { type:'SELECT_CATEGORY', payload: category});

    expect(newState.activeCategory).toEqual('electronics');
    expect(newState.categoryDescription).toEqual('Making your life easier, one volt at a time');
  });
});