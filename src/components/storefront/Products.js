import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../../store/categories.js';
import { If } from '../if/If.js';


const ProductDisplay = (props) => {
  return (
    <div>
      {props.products.map(product => {
        return (
          <If condition={product.active}>
          <div>
            <p>{product.name}</p>
          </div>
          </If>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  }
}

const mapDispatchToProps = {
  selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay);