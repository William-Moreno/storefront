import React from 'react';
import Container from '@material-ui/core/Container';
import { addToCart } from '../../store-toolkit/cart.slice.js';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '24px',
    paddingRight: '24px',
  },
  root: {
    minWidth: 200,
    height: 380,
    marginBottom: 14,
  },
  media: {
    height: 320,
    margin: '5px',
  },
  centering: {
    textAlign: 'center',
  },
  lefty: {
    float: 'left',
  },
  righty: {
    float: 'right',
  },
  matchWidth: {
    minWidth: '47.5vw',
  },
  tripButtons: {
    minWidth: '16vw',
  },
  bottomSeparation: {
    marginBottom: '4vh',
  },
  topSeparation: {
    marginTop: '4vh',
  },
});


export default function ProductDetails() {

  let details = useSelector(state => state.details);

  let dispatch = useDispatch();

  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Typography className={classes.centering} gutterBottom variant="h3" component="h3">
        {details.details.name}
      </Typography>
      <Typography className={classes.centering} gutterBottom variant="h4" component="h5">
        Subtitle
      </Typography>
      <Card  className={classes.root} raised>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://source.unsplash.com/random?placeholder"
            title=""
          />
          <CardContent className={classes.bottomSeparation}>
            <Typography gutterBottom variant="h5" component="h2">
              <span className={classes.lefty}>In Stock: {details.details.inStock}</span>
              <span className={classes.righty}>{details.details.price}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Button className={classes.matchWidth} onClick={() => dispatch(addToCart(details.details))} variant="contained" color="primary">
        Add to Cart
      </Button>
      <Typography className={classes.topSeparation} gutterBottom variant="h4" component="h5">
        Related Items
      </Typography>
      <ButtonGroup className={classes.bottomSeparation}size="large" color="default" aria-label="large outlined primary button group">
        <Button className={classes.tripButtons}>Suggestion 1</Button>
        <Button className={classes.tripButtons}>Suggestion 2</Button>
        <Button className={classes.tripButtons}>Suggestion 3</Button>
      </ButtonGroup>
      <Typography className={classes.topSeparation} gutterBottom variant="h4" component="h5">
        Product Details
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Specifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.bottomSeparation}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Customer Reviews</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>  
  )
}