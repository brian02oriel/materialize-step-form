import React, { Component } from 'react';
import './App.css';
import FormStepper from './components/Stepper';
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (
        <div className="container">
            <Grid
            alignContent = 'center'
            alignItems = 'center'
            justify = 'center' >
              <FormStepper />

          </Grid>
        </div>
      
    );
  }
}

export default App;
