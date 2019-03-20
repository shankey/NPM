
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StoryAppBar from "../CtAppBar/StoryAppBar.js";
import GridTiles from "../GridTiles/GridTiles.js"
import StaticBanner from "../Banner/StaticBanner.js"
import TripContainer from "../Utils/TripContainer"


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

        <div>
          <StoryAppBar position="absolute" styleBgColor="transparent" fontColor="textSecondary"/>

          <StaticBanner bgImage="/images/banner3-new2.jpg" tint={true}/>
           
          <TripContainer>
              <GridTiles />
          </TripContainer>
        </div>
    );
    
  };
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
