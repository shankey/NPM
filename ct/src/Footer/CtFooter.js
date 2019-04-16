import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const styles = theme => ({
  
  footer: {
    flexShrink: 0,
    backgroundColor: theme.palette.background.other,
    padding: theme.spacing.unit * 3,
    marginTop: 32,
    [theme.breakpoints.up('md')]: {
      marginTop: 60,
    },
  }
  
});

class CtFooter extends React.Component {


	render(){
		const { classes } = this.props;

		return(
			
				<footer className={classes.footer}>
			        
			        <Typography color="textPrimary" variant="subtitle1" align="center" component="p">
			          © All rights reserved.	
			        </Typography>
		      	</footer>
	      	
      )
	}
	
}


CtFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CtFooter);