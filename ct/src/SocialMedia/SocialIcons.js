import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 16,
    marginBotton: 16
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '& :hover': {
      color: red[800],
    },
  },
});


class SocialIcons extends Component {

  state = {
    fbImg: "/images/social/fblite.png",
    twitterImg: "/images/social/twitterlite.png",
    instaImg: "/images/social/instalite.png"
  }

  renderIcon = (type, img, hoverImg, link) => {
    const { classes } = this.props;

    return (
          <div className={classes.icon}>
            <Link href={link}>
              
              <img height="56px"
                src={this.state[`${type}`]}
                onMouseOver={() => {
                  this.setState({
                    [type]: img
                  });
                }}
                onMouseOut={() => {
                  this.setState({
                    [type]: hoverImg
                  });
                }}
              />
            </Link>
          </div>
      );
  }


  render(){

    const { classes } = this.props;
      return (

          


          <div className={classes.root}>

            {this.renderIcon("instaImg", "/images/social/instadark.png", "/images/social/instalite.png", "https://www.instagram.com/coupletrips.in/")}
            {this.renderIcon("fbImg", "/images/social/fbdark.png", "/images/social/fblite.png", "https://www.facebook.com/CoupleTrips")}
            {this.renderIcon("twitterImg", "/images/social/twitterdark.png", "/images/social/twitterlite.png", "https://twitter.com/coupletrips_in")}
            
          </div>

          
      );
  }
};


SocialIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialIcons);
