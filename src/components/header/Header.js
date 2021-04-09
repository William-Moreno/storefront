import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/categories.js';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {

  let cartInfo = useSelector(state => state.cart);


  const classes = useStyles();
    return (
      <AppBar position="static" color="default">
        <Toolbar elevation={3}>
          <Typography variant="h6" className={classes.title}>
            "What's In Store...?"
          </Typography>
          <Link color="inherit" to="/cart">Cart ({cartInfo.cartCount})</Link>
        </Toolbar>
      </AppBar>
    )
}

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart.cart,
//     cartCount: state.cart.cartCount,
//   }
// }

// const mapDispatchToProps = {
//   selectCategory,
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Header);