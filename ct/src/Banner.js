import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
 
const styles = {
  bannerHeight: {
    height: 300
  },
  
};

class Banner extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Carousel 
            dynamicHeight={false} showArrows={true} showThumbs={false} showStatus={false} showIndicators={false}>
                <div className={classes.bannerHeight}>
                    <img src="https://www.ticketsuite.co.nz/assets/image_uploads/event_image/1482734893136test-banner-2.jpg" />
                    
                </div>
                <div>
                    <img src="https://static2.tripoto.com/media/filter/nxxl/img/687096/TripDocument/1544169467_home_banner_1.png" />
                    
                </div>
                <div>
                    <img src="https://static2.tripoto.com/media/filter/nxl/img/758698/TripDocument/1546883029_a2_38.jpg" />
                    
                </div>

                
                
            </Carousel>
        );
    }
};
 

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Banner);