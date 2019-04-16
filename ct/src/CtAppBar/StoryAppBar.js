
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { compose } from 'recompose';
import MenuLeftDrawer from './MenuLeftDrawer' 
import Link from '@material-ui/core/Link';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    rightLinkContainer: {
      display: "flex",
      padding: 0,
      [theme.breakpoints.down('xs')]: {
        display: "none" 
      },
    },
    link: {
      padding: 16,
      fontWeight: 900
    },
    gutters: {
      // paddingLeft:16,
      // paddingRight: 16,
      // [theme.breakpoints.up('sm')]: {
        paddingLeft: 32,
        paddingRight: 32
      // },
    },
    logo: {
      textAlign: "left",
      [theme.breakpoints.down('xs')]: {
        textAlign: "right",
        
      },
    },
    logoImageStyle: {
      
      width: 250,
      [theme.breakpoints.down('xs')]: {
        width: 250,
        // define width as percentage for mobile so resolution below 360 coudl be rendered well
      },
    },
    list: {
      width: 250,
    }
});


class StoryAppBar extends React.Component {
  
  constructor(props) {
      super(props);
      
   }


  render(){
    const { classes } = this.props



    return(
          
        
          <AppBar position={this.props.position} color={this.props.color} 
          style={{ backgroundColor: this.props.styleBgColor,
            boxShadow: '0px 1px 5px rgba(0,0,0,.05)'}}>


            <Toolbar classes={{gutters: classes.gutters}} >

              <MenuLeftDrawer className={classes.menuButton1}/>
              
              <Typography variant="h6" className={ `${classes.root} ${classes.logo}` } color="inherit" >
                <Link href="/travel" >
                  <img className={classes.logoImageStyle} src={this.props.logoImage} />
                </Link>
              </Typography>

              
              <div className={classes.rightLinkContainer}>
                <Typography variant="h6" color="inherit" className={classes.link}>
                  <Link href="/travel" underline="none" color="inherit">
                    Travel
                  </Link>
                </Typography>
              
                <Typography variant="h6" color="inherit" className={classes.link}>
                  <Link href="/contactus" underline="none" color="inherit">
                    Contact Us
                  </Link>
                </Typography>
              </div>
            </Toolbar>
          </AppBar>
    );
    
  };
}

StoryAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default compose(
  withWidth(),
  withStyles(styles)
  )(StoryAppBar);
