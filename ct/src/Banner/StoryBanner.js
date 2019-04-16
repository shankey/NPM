import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StaticBanner from "./StaticBanner.js"


const styles = theme => ({
  container: {
    backgroundColor: "rgba(0,0,0,0)",
    [theme.breakpoints.up('md')]: {
      backgroundColor: "rgba(0,0,0,.02)"
    },
  },
  root: {
    margin: 16,
    [theme.breakpoints.up('md')]: {
      margin: 16,
      marginBottom: 32,
    },
  },
  item: {
    marginTop:32,
  },
  
});

class StoryBanner extends Component {

    render() {
        const { classes } = this.props;
        console.log(this.props);
        return(
          <Grid container direction="row-reverse" alignItems="center" classes={{container: classes.container}} >

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <StaticBanner bgImage={this.props.bgImage} tint={false} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} classes={{item: classes.item}}>
                <Typography color="textSecondary" align='center' variant='h3' classes={{root: classes.root}}> 

                {this.props.normalizedlocation} </Typography>

                <Typography align='center' variant='h4' classes={{root: classes.root}} style={{color: 'darkslategray'}} > 
                                  {this.props.title} </Typography>
              </Grid>
          </Grid>
        )
      } 
    
};
 

StoryBanner.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(StoryBanner);