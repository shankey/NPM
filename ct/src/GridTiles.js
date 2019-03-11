import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import TripContainer from "./TripContainer"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  storyTileOuter: {
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      paddingTop: '40%'
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '50%',
    },
    position: 'relative',
    backgroundImage: "url(https://material-ui.com/static/images/grid-list/breakfast.jpg)",
    backgroundSize: "cover"
  },
  storyTileInner: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(0,0,0,.35)'
  },
  storyTileTint: {
    top:'30%',
    position: 'relative',
    textAlign: 'center'
  }
});

function GridTiles(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>

      <Grid container spacing={16}>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={classes.storyTileOuter}>
            <Link to='/story'>
            <div className={classes.storyTileInner}>
              <div className={classes.storyTileTint}>
                <Typography align="center" variant="h6" color="textSecondary" className={classes.grow}>
                  1234567
                </Typography>
                <Typography align="center" variant="h6" color="textSecondary" className={classes.grow}>
                  5678901
                </Typography>
              </div>
            </div>
            </Link>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={classes.storyTileOuter}>
            <div className={classes.storyTileInner}>
              <div className={classes.storyTileTint}>
                <p>12345</p>
                <p>67890</p>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={classes.storyTileOuter}>
            <div className={classes.storyTileInner}>
              <div className={classes.storyTileTint}>
                <p>12345</p>
                <p>67890</p>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={classes.storyTileOuter}>
            <div className={classes.storyTileInner}>
              <div className={classes.storyTileTint}>
                <p>12345</p>
                <p>67890</p>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={classes.storyTileOuter}>
            <div className={classes.storyTileInner}>
              <div className={classes.storyTileTint}>
                <p>12345</p>
                <p>67890</p>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={classes.storyTileOuter}>
            <div className={classes.storyTileInner}>
              <div className={classes.storyTileTint}>
                <p>12345</p>
                <p>67890</p>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={classes.storyTileOuter}>
            <div className={classes.storyTileInner}>
              <div className={classes.storyTileTint}>
                <p>12345</p>
                <p>67890</p>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={classes.storyTileOuter}>
            <div className={classes.storyTileInner}>
              <div className={classes.storyTileTint}>
                <p>12345</p>
                <p>67890</p>
              </div>
            </div>
          </div>
        </Grid>

        

      </Grid>
    </div>
  );
}

GridTiles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridTiles);
