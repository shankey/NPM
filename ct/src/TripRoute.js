import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import App from "./App/App"
import Story from "./Story/Story"
import ContactUs from "./ContactUs/ContactUs"


const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#000000',
      contrastText: '#FFFFFF'
    }, 
    secondary: {
     main: '#FFFFFF',
     contrastText: '#000000'
   },
   background: {
    default: '#FFFFFF',
    paper: '#FFFFFF',
    other: '#CDCDCD'
   },
   text: {
    primary: '#FFFFFF',
    secondary: '#000000'
   }
  },
  typography: {
    htmlFontSize: 21,
    fontFamily: "'Merriweather', serif"
  }
  
});


class TripRoute extends React.Component {

  
  render(){

  	
    return(
      <MuiThemeProvider theme={theme} style={{display: "flex"}}>
        <React.Fragment>
          <CssBaseline />
          <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/travel' component={App}/>
            <Route exact path='/story/:id' component={Story}/>
            <Route exact path='/contactus' component={ContactUs}/>
          </Switch>
        </React.Fragment>  
      </MuiThemeProvider>
    );
    
  };
}


export default TripRoute;
