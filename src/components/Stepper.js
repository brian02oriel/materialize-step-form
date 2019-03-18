import React, {Component} from 'react';
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


//import FormUserDetails from './FormUserDetails';
import PersonalForm from './PersonalForm';
import ContactForm from './ContactForm';
import FormRequiredDocs from './FormRequiredDocs';
import Confirm from './Confirm'
import Success from './Success'


function getSteps() {
  return ['Personal Info', 'Contact Info', 'Required Documentation', 'Confirm'];
}

class FormStepper extends Component {
  
  state = {
    step:0,
    firstName: '', //first form
    lastName:'',
    birth: '',
    gender: '',
    nationality: '',
    em_country: '',
    id:'',
    id_number:'',
    direction: '', //second form
    city:'',
    postal: '',
    country:'',
    cell:'',
    email: '',
    pid_front: '', //third form
    pid_back:'',
    presidence: ''
}

getStepContent(step) {
  const {firstName, lastName, birth, gender, nationality, em_country, id, id_number, direction,city, postal, country, cell,  email, pid_front, pid_back, presidence} = this.state;
  const values = {firstName, lastName, birth, gender, nationality, em_country, id, id_number, direction,city, postal, country, cell, email, pid_front, pid_back, presidence};
  //console.log(step);  
  switch (step) {
      case 0: 
        return(
          <PersonalForm 
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          />
        )
      case 1:
        return(
          <ContactForm
          nextStep = {this.nextStep}
          prevStep = {this.prevStep}
          handleChange = {this.handleChange}
          values = {values}
          />
        )
      case 2:
        return(
          <FormRequiredDocs
          nextStep = {this.nextStep}
          prevStep = {this.prevStep}
          handleChange = {this.handleChange}
          values = {values}
          />
        )
      case 3:
      return(
        < Confirm
        nextStep = {this.nextStep}
        prevStep = {this.prevStep}
        handleChange = {this.handleChange}
        values = {values}
        />
        )
      case 4:
      return(
            < Success />
        )
      default:
        return 'Unknown step';
    }
  }
    
//Proceed to next step
nextStep = () => {
  const {step} = this.state;
  this.setState({
      step: step + 1
  });
}

//Go back previous step
prevStep = () => {
const {step} = this.state;
this.setState({
    step: step - 1
});
}

//Handle fields change
handleChange = input => e => {
  this.setState({[input]: e.target.value});
}


  render() {
    const {containerStyle, contentStyle} = styles;
    const steps = getSteps();
    const activeStep = this.state.step;
    
    return (
      <Grid style = { containerStyle}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
   

            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className="row" style={contentStyle}>
        <h4><span className = "deep-purple-text text-darken-3"> Tu cuenta puede tardar hasta 4 días hábiles en ser aprobada</span></h4>
            <div className="col s12">
              <Typography >{this.getStepContent(activeStep)}</Typography>
            </div>
        </div>
      </Grid>
    );
  }
}

const styles = {
  containerStyle:{
    margin: 15,
    alignContent: 'center',
    justifyContent: 'center'
  },
}

export default FormStepper;
