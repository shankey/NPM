import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import TripContainer from "../Utils/TripContainer"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  storyTileOuter: {
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      paddingTop: '40%'
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '50%',
    },
    position: 'relative',
    backgroundSize: "cover"
  },
  storyTileInner: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(0,0,0,.4)'
  },
  storyTileTint: {
    top:'35%',
    [theme.breakpoints.down('xs')]: {
      top: '40%'
    },
    position: 'relative',
    textAlign: 'center'
  },
  spacing: {
    padding: 8,
    [theme.breakpoints.down('sm')]: {
      padding: 4,
    },
  }
});

class GridTiles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      storyTiles: [],
      bgImage: "url(https://material-ui.com/static/images/grid-list/breakfast.jpg)"
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_BASE_URL + "userstories")
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
            storyTiles: result
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

  render(){

    const { classes } = this.props;

    return(
      <div className={classes.root}>

        <Grid container>

        {this.state.storyTiles.map(function(item){
          return(
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.spacing}>
              <div className={classes.storyTileOuter} style = {{ backgroundImage: 'url(\'' + item.image + '\')'}} >
                <Link to={"/story/" + item.id + "_" + item.normalizedlocation}>
                  <div className={classes.storyTileInner}>
                    <div className={classes.storyTileTint}>
                      <Typography align="center" variant="h5" color="textPrimary" className={classes.grow} >
                        <div dangerouslySetInnerHTML={{__html: item.location}}></div>
                      </Typography>
                    </div>
                  </div>
                </Link>
              </div>
            </Grid>
          )
        })}

        </Grid>

    </div>
    );
  }
  

  
}

GridTiles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridTiles);
