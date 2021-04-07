import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/cart.js';
import { If } from '../if/If.js';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


const CartDisplay = (props) => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (

<div>
        <Paper evelation={3}>
      <List dense={dense}>
                  <ListItem>
                  <ListItemText
                    primary="Shopping Cart"
                    />
                </ListItem>
      <If condition={props.cart.length > 0}>
      {props.cart.map(item => {
        return (
          <ListItem key={item.name}>
                  <ListItemText
                    primary={item.name}
                    secondary={item.inCart}
                    />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => props.removeFromCart(item)} edge="end" aria-label="delete">
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

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  }
}

const mapDispatchToProps = {
  removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDisplay);
