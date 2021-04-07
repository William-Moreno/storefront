import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/cart.js';
import { If } from '../if/If.js';


const CartDisplay = (props) => {
  console.log(props.cart);
  return (
    <div>
      <If condition={props.cart.length > 0}>
      {props.cart.map(item => {
        return (
          <button onClick={() => props.removeFromCart(item)}>{item.name}</button>
        )
      })}
      </If>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  }
}

const mapDispatchToProps = {
  removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDisplay);
