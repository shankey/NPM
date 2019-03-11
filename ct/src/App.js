
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import StoryAppBar from "./StoryAppBar.js";
import Card from "./Card.js";
import TripGrid from "./TripGrid.js"
import GridTiles from "./GridTiles.js"
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
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 5,

    },
    container: {
      marginLeft: 5,
      marginRight: 5
    }
};


class App extends React.Component {
  
  render(){
    const { classes } = this.props;

    return(
      <MuiThemeProvider theme={theme}>
        <div>
          <StoryAppBar />

          <StaticBanner />
           
          <TripContainer>
              <GridTiles />
          </TripContainer>

          
          
        </div>
      </MuiThemeProvider>
    );
    
  };
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
