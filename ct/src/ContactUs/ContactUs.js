import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StoryAppBar from "../CtAppBar/StoryAppBar.js";
import StaticBanner from "../Banner/StaticBanner.js"
import TripContainer from "../Utils/TripContainer"
import CtFooter from "../Footer/CtFooter"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Helmet} from "react-helmet";


const styles = theme => ({
    root: {
      flexGrow: 1
    
    },

    centerHeading: {
      marginTop: 24,
      marginBottom: 24
    },
    liCenter: {
      width: '100%',
      margin: "auto",
      maxWidth: 360
    },
    card: {
      maxWidth: 300,
      margin: "auto"
    },
    media: {
      height: 175,
    },
    key: {
      color: "grey",
      marginRight: 5,
    },
    emailText: {
      marginTop: 15,
      marginBottom: 15
    }
  
});


class ContactUs extends React.Component {

  copyToClipboard = (e) => {

    var copyText = document.getElementById("email");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);

    // this.button.select();
    // document.execCommand('copy');
    // // This is just personal preference.
    // // I prefer to not show the the whole text area selected.
    // e.target.focus();
    
  };
  
  render(){
    const { classes } = this.props;

    return(
      <div>
        <div class="upper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>CoupleClaps - ContactUs - Email </title>
            </Helmet>

            <StoryAppBar position="absolute" iconAlign="left" logoImage='/images/CtLogo-6.png' color="primary" styleBgColor="transparent" fontColor="textSecondary"/>

            <StaticBanner bgImage="/images/banner3-new2.jpg" tint={true} centerText="Follow us on" isSocial={true}/>

            <Typography color="textSecondary" align="center" variant="h4" className={classes.centerHeading}> Partner With Us
            </Typography>
             
            <TripContainer>
                
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/contactus/mail-w.jpg"
                      title="Contemplative Reptile"
                    />
                    
                  </CardActionArea>
                  <Typography color="textSecondary" gutterBottom variant="h5" id="email" align="center" className={classes.emailText}>
                        Contact@coupleclaps.com
                      </Typography>
                </Card>

            </TripContainer>
          </div>

          <div class="lower">
            <CtFooter />
          </div>
        </div>
    );
    
  };
}

ContactUs.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ContactUs);
