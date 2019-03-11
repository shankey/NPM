import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import StoryAppBar from "./StoryAppBar.js";
import StaticBanner from "./StaticBanner.js"
import TripContainer from "./TripContainer"

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: purple[500],
    }, 
    secondary: {
     main: '#11cb5f',
   },
   text: {
    primary: '#000000',
    secondary: '#FFFFFF'
   }
  },
  
});


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

class Story extends React.Component {
  
  render(){
    const { classes } = this.props;

    return(
      <MuiThemeProvider theme={theme}>
        <div>
          <StoryAppBar />

          <StaticBanner />
           
          <TripContainer>
            <Typography variant='h4'> Trip Title </Typography>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TripContainer>

          
          
        </div>
      </MuiThemeProvider>
    );
    
  };
}

Story.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Story);
