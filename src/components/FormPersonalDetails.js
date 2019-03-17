import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class FormPersonalDetails extends Component {
    continue = e =>{ //e = event
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
    const { values, handleChange } = this.props;
    return (
        <Grid container spacing={24} 
        alignContent = 'center'
        alignItems = 'center'
        justify = 'center'
       > 
        <React.Fragment>
            <Grid container item xs={12} spacing={24}
             alignContent = 'space-around'
             alignItems = 'center'
             justify = 'flex-end'
             direction='column'
             style = {styles.gridStyle}>
             
                     <TextField
                 label= "Occupation"
                 onChange = {handleChange('occupation')}
                 defaultValue = {values.occupation} 
                 margin="dense"/>

         

                 <TextField 
                 label = "City"
                 onChange = {handleChange('city')}
                 defaultValue = {values.city} 
                 margin = "dense"/>
            
            
            
                 <TextField 
                 label = "Bio"
                 onChange = {handleChange('bio')}
                 defaultValue = {values.bio} 
                 margin = "dense"/>
             
             </Grid>

            <Grid  xs={12}
             alignContent = 'space-around'
             alignItems = 'flex-start'
             justify = 'flex-start'
             direction='row'> 
                <Button variant="contained" color="primary" style = {styles.button} onClick = {this.back}>
                    Back
                </Button>
                <Button variant="contained" color="primary" style = {styles.button} onClick = {this.continue}>
                    Continue
                </Button>

            </Grid>



        </React.Fragment>
      </Grid>
    )
  }
}

const styles = {
    button: {
        margin: 15
    },
    gridStyle: {
        margin: 15
    }
}
