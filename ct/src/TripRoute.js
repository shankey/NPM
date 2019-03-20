import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import App from "./App/App"
import Story from "./Story/Story"


const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#FFFFFF',
    }, 
    secondary: {
     main: '#11cb5f',
   },
   text: {
    primary: '#000000',
    secondary: '#FFFFFF'
   }
  },
  typography: {
    htmlFontSize: 21,
    fontFamily: "'Merriweather', serif"
  },
  
});


class TripRoute extends React.Component {

  
  render(){

  	
    return(
      <CssBaseline />,

      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route exact path='/story/:id' component={Story}/>
        </Switch>
      </MuiThemeProvider>
    );
    
  };
}


export default TripRoute;
