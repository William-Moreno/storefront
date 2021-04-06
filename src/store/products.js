let initialState = {
  products: [
    {
      active: true,
      category: 'food',
      name: 'Taco',
      url: 'https://source.unsplash.com/random?taco',
      description: 'Mexican hand-food',
      price: 2.50,
      inventory: 100
    },
    {
      active: true,
      category: 'food',
      name: 'Pizza',
      url: 'https://source.unsplash.com/random?pizza',
      description: 'Italian hand-food',
      price: 3.50,
      inventory: 100
    },
    {
      active: true,
      category: 'food',
      name: 'Hamburger',
      url: 'https://source.unsplash.com/random?burger',
      description: 'American hand-food',
      price: 4.75,
      inventory: 100
    },
    {
      active: true,
      category: 'food',
      name: 'Chips',
      url: 'https://source.unsplash.com/random?chips',
      description: 'Snacky hand-food',
      price: 1.25,
      inventory: 100
    },
    {
      active: true,
      category: 'food',
      name: 'Cookies',
      url: 'https://source.unsplash.com/random?cookie',
      description: 'Dessert hand-food',
      price: 2.00,
      inventory: 100
    },
    {
      active: true,
      category: 'electronics',
      name: 'Trackball',
      url: 'https://source.unsplash.com/random?trackball',
      description: 'An alternate to a mouse or trackpad',
      price: 60.00,
      inventory: 20
    },
    {
      active: true,
      category: 'electronics',
      name: 'Monitor',
      url: 'https://source.unsplash.com/random?monitor',
      description: 'Display for a computer',
      price: 320.00,
      inventory: 6
    },
    {
      active: true,
      category: 'electronics',
      name: 'Keyboard',
      url: 'https://source.unsplash.com/random?keyboard',
      description: 'Instrument of data entry',
      price: 180.00,
      inventory: 12
    },
    {
      active: true,
      category: 'electronics',
      name: 'Headset',
      url: 'https://source.unsplash.com/random?headset',
      description: 'Computer communications equipment',
      price: 80.00,
      inventory: 20
    },
    {
      active: true,
      category: 'electronics',
      name: 'Camera',
      url: 'https://source.unsplash.com/random?camera',
      description: 'For images and/or video',
      price: 40.00,
      inventory: 20
    },
  ]
}
let products;

export default function ProductsReducer(state = initialState, action) {
  let { type, payload } = action;

  switch(type) {
    case "SELECT_CATEGORY":

      products = state.products.map(product => {
      if(product.category === payload || payload === 'all') {
        return{ active: true, category: product.category, name: product.name, url: product.url, description: product.description, price: product.price, inventory: product.inventory };
      }
      return { active: false, category: product.category, name: product.name, url: product.url, description: product.description, price: product.price, inventory: product.inventory };
      });

      return { products: products };

    default:
      return state;
  }

}