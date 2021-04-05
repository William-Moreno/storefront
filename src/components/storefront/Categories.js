import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../../store/categories.js';


const CategoryPicker = (props) => {
  return (
    <div>
      {props.categories.map(category => {
        return (
          <div>
            <button onClick={() => props.selectCategory(category.name)}>
              {category.name}
            </button>
              </div>
        )
      })}
      <h2>Current Active Category: {props.activeCategory}</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    activeCategory: state.categories.activeCategory,
  }
}

const mapDispatchToProps = {
  selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPicker);