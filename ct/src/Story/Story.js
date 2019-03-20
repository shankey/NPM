import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import StoryAppBar from "../CtAppBar/StoryAppBar.js";
import StoryBanner from "../Banner/StoryBanner.js"
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


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      ss: 'Hello',
    };
  }

  
  render(){
    const { classes } = this.props;
    const { params } = this.props.match
    console.log(this.state.ss.image)

    return(
        <div>
          <StoryAppBar position="relative" styleBgColor="#FFFFFF" fontColor="textPrimary"/>

          <StoryBanner bgImage={this.state.ss.image} title={this.state.ss.title} location={this.state.ss.location} />
          
          <TripContainer>
{/*            <Typography align='center' variant='h3'> {this.state.ss.location} </Typography>*/}
{/*            <Typography align='center' variant='h3'> {this.state.ss.title} </Typography>*/}

            <div class="migrate" dangerouslySetInnerHTML={{__html: this.state.ss.story}}></div>
          </TripContainer>

          
          
        </div>
    );
    
  };


  componentDidMount() {
    const { params } = this.props.match

    fetch("http://localhost:9000/story/" + params.id)
      .then(
        (res) => {
          console.log("mount error");
          return res.json();
          })
      .then(
        (result) => {
          console.log("mount");
          console.log(result)
          this.setState({
            ss: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

}

Story.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Story);
