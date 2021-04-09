import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



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

