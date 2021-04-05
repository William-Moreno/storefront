let initialState = {
  categories: [
    { name: 'all', active: true },
    { name: 'food', active: false },
    { name: 'electronics', active: false }
  ],
  activeCategory: 'all',
}
let newCategory;
let categories;

export default function CategoriesReducer(state = initialState, action) {
  let { type, payload } = action;

  switch(type) {
    case "SELECT_CATEGORY":

      newCategory = payload;
      categories = state.categories.map(category => {
        if(category.name === payload) {
          return{ name: category.name, active: true };
        }
        return { name: category.name, active: false };
      });

      return { activeCategory: newCategory, categories: categories };

    case "SELECT_ELECTRONICS_CATEGORY":

      return { activeCategory: newCategory, categories: categories };
      
    default:
      return state;
  }

}

export function selectCategory(name) {

  return {
    type: "SELECT_CATEGORY",
    payload: name,
  }
}

// export function selectElectronics(category) {

//   return {
//     type: "SELECT_ELECTRONICS_CATEGORY",
//     payload: category,
//   }
// }