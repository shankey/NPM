import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  storyTileOuter: {
    width: '100%',
    paddingTop: 300,
    position: 'relative',
    backgroundImage: "url(https://static2.tripoto.com/media/filter/nxxl/img/687096/TripDocument/1544169467_home_banner_1.png)",
    backgroundSize: "cover",
    backgroundPosition: "50% 30%"
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
    top:'50%',
    position: 'relative'
  }
});


class StaticBanner extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.storyTileOuter}>
                <div className={classes.storyTileInner}>
                    <div className={classes.storyTileTint}>
                        <Typography align="center" variant="h6" color="textSecondary" className={classes.grow}>
                            Couple Trips 3
                        </Typography>
                    </div>
                </div>
          </div>
        );
    }
};
 

StaticBanner.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(StaticBanner);