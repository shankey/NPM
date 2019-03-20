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
    paddingTop: 340,
    position: 'relative',
    backgroundSize: "cover",
    backgroundPosition: "50% 30%"
  },
  storyTileInner: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  storyTileInnerTintYes: {
    background: 'rgba(0,0,0,.35)'
  },
  storyTileInnerTintNo: {
    background: 'rgba(0,0,0,0)'
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
          console.log(this.props),
            <div className={classes.storyTileOuter} style = {{ backgroundImage: 'url(\'' + this.props.bgImage + '\')'}} >



                <div className={`${classes.storyTileInner} ${this.props.tint ? classes.storyTileInnerTintYes : classes.storyTileInnerTintNo}`} >
                    <div className={classes.storyTileTint}>
                        <Typography align="center" variant="h6" color="textSecondary" className={classes.grow}>
                            {this.props.centerText}
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