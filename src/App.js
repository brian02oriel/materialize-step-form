import React, { Component } from 'react';
import './App.css';
import FormStepper from './components/Stepper';
//import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (
        <div className="container grey lighten-4">
            <div className="row" >
              <FormStepper />

          </div>
        </div>
      
    );
  }
}

export default App;
