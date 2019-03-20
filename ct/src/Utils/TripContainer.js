import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
    section: {
      maxWidth: 1280,
      marginLeft: 'auto',
      marginRight: 'auto',
      
    },
    container: {
      marginTop: 24,
      marginLeft: 48,
      marginRight: 48,
      textAlign: 'justify'
    }
});

function TripContainer(props) {
  const { classes } = props;

  return (
    
            <div className={classes.container}>
              <div className={classes.section}>
                {props.children}
              </div>
            </div>
 
  );
}

TripContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TripContainer);
