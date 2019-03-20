
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = {
    root: {
      flexGrow: 1
    },
    grid: {
      flexGrow: 1,
      maxWidth: 1080
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    section: {
      maxWidth: 1280,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
    },
    container: {
      margin: 'auto',
      textAlign: 'center'
    }
};


class StoryAppBar extends React.Component {
  
  render(){
    const { classes } = this.props;

    return(
      
        
          <AppBar position={this.props.position} style={{ backgroundColor: this.props.styleBgColor, boxShadow: 'none'}}>
            <Toolbar>
              
              <Typography variant="h6" className={classes.grow}>
                <img height='64px' src='https://pbs.twimg.com/profile_images/660131004963684352/I2HTBWBs_400x400.png' />
              </Typography>

              <Typography variant="h6" color={this.props.fontColor} className={classes.grow}>
                Couple Trips
              </Typography>
              <Typography variant="h6" color={this.props.fontColor} className={classes.grow}>
                Couple Trips 2
              </Typography>

              <Typography variant="h6" color={this.props.fontColor} className={classes.grow}>
                Couple Trips 3
              </Typography>
            </Toolbar>
          </AppBar>
    );
    
  };
}

StoryAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(StoryAppBar);
