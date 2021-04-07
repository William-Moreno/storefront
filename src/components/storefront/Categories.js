import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../../store/categories.js';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  uppercase: {
    textTransform: 'uppercase',
  },
});

const CategoryPicker = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <h3>
        Browse Our Products by Category
        </h3>
      </div>
      <Grid container style={{ padding: '5px' }}>
      {props.categories.map(category => {
        return (          
            <Button style={{ margin: '0 6px 0 0' }} variant="contained" color="default" onClick={() => props.selectCategory(category.name)}>
              {category.name}
            </Button>
        )
      })}
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    activeCategory: state.categories.activeCategory,
    categoryDescription: state.categories.categoryDescription,
  }
}

const mapDispatchToProps = {
  selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPicker);