import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import App from "./App"
import Story from "./Story"

class TripRoute extends React.Component {
  
  render(){

    return(
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/story' component={Story}/>
      </Switch>
    );
    
  };
}


export default TripRoute;
