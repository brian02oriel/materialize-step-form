import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';


export default class Confirm extends Component {
    continue = e =>{ //e = event
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
      const { values:{ firstName, lastName, email, occupation, city, bio} } = this.props;
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
              <List>  
                    <ListItem>
                        First Name
                        <ListSubheader>
                            {firstName}
                        </ListSubheader>
                    </ListItem>
                    <ListItem>
                        Last Name
                        <ListSubheader>
                            {lastName}
                        </ListSubheader>
                    </ListItem>
                    <ListItem>
                        Email
                        <ListSubheader>
                            {email}
                        </ListSubheader>
                    </ListItem>
                    <ListItem>
                       Occupation
                        <ListSubheader>
                            {occupation}
                        </ListSubheader>
                    </ListItem>
                    <ListItem>
                      City
                        <ListSubheader>
                            {city}
                        </ListSubheader>
                    </ListItem>
                    <ListItem>
                        Bio
                        <ListSubheader>
                            {bio}
                        </ListSubheader>
                    </ListItem>
                   
                </List>
             </Grid>
               

            <Grid xs={12}
             alignContent = 'space-around'
             alignItems = 'flex-start'
             justify = 'flex-start'
             direction='row'
            > 
                <Button variant="contained" color="primary" style = {styles.button} onClick = {this.back}>
                    Back
                </Button>

                <Button variant="contained" color="primary" style = {styles.button} onClick = {this.continue}>
                    Confirm & Continue
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