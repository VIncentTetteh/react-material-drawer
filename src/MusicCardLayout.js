import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card1 from './Card1';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function MusicCardLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginTop: '25px' }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={3}>
          <Card1 />
        </Grid>
        <Grid item xs={3}>
          <Card1 />
        </Grid>
        <Grid item xs={3}>
          <Card1 />
        </Grid>
      </Grid>
    </div>
  );
}
