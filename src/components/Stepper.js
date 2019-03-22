import React, {Component} from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import PersonalForm from './PersonalForm';
import ContactForm from './ContactForm';
import FormRequiredDocs from './FormRequiredDocs';
import Confirm from './Confirm'
import Success from './Success'


function getSteps() {
  return ['Personal Info(Legal Representative)', 'Contact Info', 'Required Documentation', 'Confirm'];
}

class FormStepper extends Component {
  
  state = {
    step:0,
   isValidForm1: false,
   buttonState: 'disabled',
    firstName: '', //first form
    PlastName:'',
    MlastName:'',
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
  const {firstName, PlastName, MlastName, birth, gender, nationality, em_country, id, id_number, direction,city, postal, country, cell,  email, pid_front, pid_back, presidence} = this.state;
  const values = {firstName, PlastName, MlastName, birth, gender, nationality, em_country, id, id_number, direction,city, postal, country, cell, email, pid_front, pid_back, presidence};
  //console.log(step);  
  switch (step) {
      case 0: 
        return(
          <PersonalForm 
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          handleBlur = {this.handleBlur}
          isValid = {this.state.isValidForm1}
          buttonState = {this.state.buttonState}
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
  const { value, className, name} = e.target;
  this.setState({[input]: value});
}

validFields1 = {
  firstName: false,
  PlastName: false,
  MlastName: false,
}

FormValidation(form, fields){ 
  console.log("Validacion form1", form);
  //console.log(this.validFields1);
  console.log("Campos ",fields);
  switch(form){
    case 1:
    Object.keys(fields).forEach(field =>{
      console.log("Recorriendo campos", field, fields[field]);
  
      if(fields[field]){
        console.log("campo cierto", field);
        this.setState({isValidForm1: true, buttonState: " "});
      } else{
        console.log("campo falso", field);
        this.setState({isValidForm1: false, buttonState: "disabled"});
      }
    })
    break
  }

 
    
}

handleBlur = input => e => {
  const { value, className, name} = e.target;
  console.log({[input]: className});

  switch(name){
    case "firstName":
        console.log(className.split(" "));
        className.split(" ").forEach( element => {
            if(element === "valid"){
              this.validFields1.firstName = true;
              this.FormValidation(1,this.validFields1);
            }
        })      
    break

    case "PlastName":
         console.log("Paternal Surname", className.split(" "));
         className.split(" ").forEach( element => {
          if(element === "valid"){
            this.validFields1.PlastName = true;
            this.FormValidation(1,this.validFields1);
          }
      })
    break

    case "MlastName":
    console.log("Maternal Surname", className.split(" "));
    className.split(" ").forEach( element => {
     if(element === "valid"){
       this.validFields1.MlastName = true;
       this.FormValidation(1, this.validFields1);
     }
 })
break
    
    
  }
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
        <h4 className="center-align"><span className = "deep-purple-text text-darken-3 center-align"> Tu cuenta puede tardar hasta 4 días hábiles en ser aprobada</span></h4>
            <p className="deep-orange-text text-darken-4 center-align"> The fields with the "(*)" are required</p>
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
