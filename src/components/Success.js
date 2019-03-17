import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';



export default class Success extends Component {

  render() {
      
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title = "Success" />
               <h1> Thank You For Your Submission </h1>
               <p> You will get an email with further instructions.</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

