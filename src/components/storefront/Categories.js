import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { get, change } from '../../store-toolkit/categories.slice.js';
import { selectCategory, loadCategories } from '../../store/categories.js';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


export default function CategoryPicker() {

  let categoryInfo = useSelector(state => state.categories);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(get());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div>
        <h3>
          Browse Our Products by Category
        </h3>
      </div>
      <Grid container style={{ padding: '5px' }}>
        {categoryInfo.categories.map(category => {
          return (          
            <Button key={category._id} style={{ margin: '0 6px 0 0' }} variant="contained" color="default" onClick={() => dispatch(change(category))}>
              {category.name}
            </Button>
          )
        })}
      </Grid>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     categories: state.categories.categories,
//     activeCategory: state.categories.activeCategory,
//     categoryDescription: state.categories.categoryDescription,
//   }
// }

// const mapDispatchToProps = {
//   selectCategory,
//   loadCategories
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CategoryPicker);