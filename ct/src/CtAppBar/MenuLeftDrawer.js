import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  list: {
    width: 250,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: "none" 
    },
  },
});

class MenuLeftDrawer extends React.Component {

    constructor(props) {
      super(props);
      const {classes} = this.props
      

      this.state = {
        left: false,
      }; 

      this.sideList = (
        <div className={classes.list}>
        <List>
            <ListItem>      
              <Typography variant="title" color="textSecondary"> Menu </Typography>
            </ListItem>
          </List>
          <Divider />
          <List>
            
              <ListItem button component="a" href="/travel">
                <ListItemIcon> <FlightTakeoff /> </ListItemIcon>
                <ListItemText disableTypography
                  primary={<Typography variant="title"  color="textSecondary">Travel</Typography>} />
              </ListItem>

              <ListItem button component="a" href="/contactus">
                <ListItemIcon> <MailIcon /> </ListItemIcon>
                <ListItemText disableTypography
                  primary={<Typography variant="title"  color="textSecondary">Contact Us</Typography>} />
              </ListItem>
            
          </List>
          
        </div>
      );
   }


    toggleDrawer = (open) => {
      if(this.state.left != open){
        console.log(this.state.left + " " + open)
        this.setState({ left: open });  
      }
      
    };


  render(){
      const { classes } = this.props
      return(
        <div>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
     

            <Drawer open={this.state.left} onClose={() => this.toggleDrawer(false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={() => this.toggleDrawer(false)}
              onKeyDown={() => this.toggleDrawer(false)}
            >
              {this.sideList}
            </div>
          </Drawer>
      </div>
      )
  }
}

MenuLeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuLeftDrawer);
