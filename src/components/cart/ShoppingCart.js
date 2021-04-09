import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store-toolkit/cart.slice.js';
import { If } from '../if/If.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  cart: {
    position: 'absolute',
    maxHeight: '30vh',
    width: '22vw',
    overflow: 'auto',
  }
});

export default function CartDisplay() {

  let cartInfo = useSelector(state => state.cart);

  let dispatch = useDispatch();
  
  const [dense] = React.useState(false);
  const classes = useStyles();
  return (

    <div>
      <Paper className={classes.cart} evelation={3}>
        <List dense={dense}>
          <ListItem>
            <ListItemText
            primary="Shopping Cart"
            />
          </ListItem>
          <If condition={cartInfo.cart.length > 0}>
            {cartInfo.cart.map(item => {
              return (
                <ListItem key={item.name}>
                  <ListItemText
                  primary={item.name}
                  secondary={item.inCart}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => dispatch(removeFromCart(item))}
                      color="secondary" edge="end" aria-label="delete">
                      <DeleteIcon  />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )
            })}
          </If>
        </List>
      </Paper>
    </div>
  )
}