import React from 'react';
import Grid from '@material-ui/core/Grid';



export default function Header() {

    return (
      <Grid container style={{ backgroundColor: 'lightgray', padding: '0 18px 0 18px'}}>
        <Grid item xs={4}>
        <h2>"What's In Store....?"</h2>
        </Grid>
      </Grid>
    )
}