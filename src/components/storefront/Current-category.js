import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  uppercase: {
    textTransform: 'uppercase',
  },
});

export default function CurrentCategory() {

  let categoryInfo = useSelector(state => state.categories);

  const classes = useStyles();
  return (
    <div>
      <Grid container justify="center" align="center" style={{ margin: '24px auto' }}>
        <Grid item xs={12}>
          <Typography className={classes.uppercase} gutterBottom variant="h1" component="h2">
            {categoryInfo.activeCategory}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.uppercase} gutterBottom variant="h4" component="h4">
            {categoryInfo.categoryDescription}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
