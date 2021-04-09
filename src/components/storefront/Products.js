import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get } from '../../store-toolkit/products.slice.js';
import { addToCart } from '../../store-toolkit/cart.slice.js';
import { setDetail } from '../../store-toolkit/details.slice.js';
import { Link } from 'react-router-dom';
import { If } from '../if/If.js';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '24px',
    paddingRight: '24px',
  },
  root: {
    minWidth: 200,
  },
  media: {
    height: 140,
  },
});

  
export default function ProductDisplay() {

  let productList = useSelector(state => state.products);
  let categoryInfo = useSelector(state => state.categories);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(get());
    // eslint-disable-next-line
  }, []);

  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.gridContainer} justify="center">
      {productList.map(product => {
        let linkUrl = `/products/${product._id}`;
        return (
          <If condition={product.category === categoryInfo.activeCategory && product.inStock > 0}>
            <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
            <Card  className={classes.root} raised>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://source.unsplash.com/random?placeholder"
                  title={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                  </Typography>
                  <Typography variant="h6"  component="h6">
                    ${(product.price).toFixed(2)}
                  </Typography>
                  <Typography variant="p"  component="p">
                    Stock on Hand: {product.inStock}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => dispatch(addToCart(product))}>
                  ADD TO CART
                </Button>
                <Link to={linkUrl} onClick={() => dispatch(setDetail(product))} size="small" color="primary">
                  VIEW DETAILS
                </Link>
              </CardActions>
            </Card>
            </Grid>
          </If>
        )
      })}
    </Grid>
  );
}
