import React, {Component} from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
//import Typography from '@material-ui/core/Typography';
//import Grid from '@material-ui/core/Grid';

import PersonalForm from './PersonalForm';
import ContactForm from './ContactForm';
import FormRequiredDocs from './FormRequiredDocs';
import Confirm from './Confirm'
import Success from './Success'

import '../Content.css';


function getSteps() {
  return ['Personal Info(Legal Representative)', 'Contact Info', 'Required Documentation', 'Confirm'];
}

class FormStepper extends Component {
  
  state = {
    step:0,
    idType: "",
   isValidForm1: false,
   isValidForm2: false,
   isValidForm3: false,
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
    pid_front: '', //third form
    pid_back:'',
    check_residence: '' 
}


// Get the steps contents
getStepContent(step) {
  const {firstName, PlastName, MlastName, birth, gender, nationality, em_country, id, id_number, direction,city, postal, country, pid_front, pid_back, check_residence} = this.state;
  const values = {firstName, PlastName, MlastName, birth, gender, nationality, em_country, id, id_number, direction,city, postal, country, pid_front, pid_back, check_residence};
  //console.log(step);  
  switch (step) {
      case 0: 
        console.log("Personal form", step);
        return(
          <PersonalForm 
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          handleBlur = {this.handleBlur}
          isValid = {this.state.isValidForm1}
          idType = {this.state.idType}
          />
        )
      case 1:
      console.log("Contact form", step);
      console.log("Id Type", values.id);
        return(
          <ContactForm
          nextStep = {this.nextStep}
          prevStep = {this.prevStep}
          handleChange = {this.handleChange}
          values = {values}
          handleBlur = {this.handleBlur}
          isValid = {this.state.isValidForm2}
          />
        )
      case 2:
      console.log("Required Docs form", step);
      console.log("Id Type", values.id);
        return(
          <FormRequiredDocs
          nextStep = {this.nextStep}
          prevStep = {this.prevStep}
          handleChange = {this.handleChange}
          values = {values}
          handleBlur = {this.handleBlur}
          isValid = {this.state.isValidForm3}
          />
        )
      case 3:
      console.log("Confirm form", step);
      console.log("Id Type", values.id);
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
  console.log("step", step);
}

//Go back previous step
prevStep = () => {
const {step} = this.state;
this.setState({
    step: step - 1
});

console.log("step", step);
}

//Handle fields change
handleChange = input => e => {
  const { value, name} = e.target;
  this.setState({[input]: value});
  //console.log(name);

  //Handle Select validations
  switch(name){
    case "gender":
    if(value){
      this.validFields1.gender = true;
      this.FormValidation(1, this.validFields1);
    } else{
      this.validFields1.gender = false;
      this.FormValidation(1, this.validFields1);
    }
    break

    case "nationality":
    if(value){
      this.validFields1.nationality = true;
      this.FormValidation(1, this.validFields1);
    } else{
      this.validFields1.nationality = false;
      this.FormValidation(1, this.validFields1);
    }
    break

    case "id_type":
    if(value){
      this.validFields1.id_type = true;
      this.FormValidation(1, this.validFields1);
      this.setState({idType: value});
    } else{
      this.validFields1.id_type = false;
      this.FormValidation(1, this.validFields1);
    }
    break

    case "em_country":
    if(value){
      this.validFields1.em_country = true;
      this.FormValidation(1, this.validFields1);
    } else{
      this.validFields1.em_country = false;
      this.FormValidation(1, this.validFields1);
    }
    break

    case "country":
    if(value){
      this.validFields2.country = true;
      this.FormValidation(2, this.validFields2);
    } else{
      this.validFields2.country = false;
      this.FormValidation(2, this.validFields2);
    }
    break

    case "pid_front":
    console.log("pid_front", value);
    if(value){
      this.validFields3.pid_front = true;
      this.FormValidation(3, this.validFields3);
    } else{
      this.validFields2.pid_front = false;
      this.FormValidation(3, this.validFields3);
    }
    break

    case "pid_back":
    console.log("pid_back", value);
     if(value){
       this.validFields3.pid_back = true;
       this.FormValidation(3, this.validFields3);
        } else{
          this.validFields3.pid_back = false;
          this.FormValidation(3, this.validFields3);
        }
    break

    case "check_residence":
    console.log("check_residence", value);
     if(value){
       this.validFields3.check_residence = true;
       this.FormValidation(3, this.validFields3);
        } else{
          this.validFields3.check_residence = false;
          this.FormValidation(3, this.validFields3);
        }

    break

    default:
    
    break

  }
}

validFields1 = {
  firstName: false,
  PlastName: false,
  MlastName: false,
  birth: false,
  gender: false,
  nationality: false,
  id_type: false,
  em_country: false,
  id_number: false
}

validFields2 = {
  direction: false, 
  city: false,
  country: false,
}

validFields3 = {
  pid_front: false, 
  pid_back: false,
  check_residence: false,
}

//Validate all the 3 forms
FormValidation(form, fields){
  switch(form){
    //Casos de validación formulario 1
    case 1:
    //console.log("campos", Object.entries(fields));
    //console.log("campos", Object.values(fields).every(field => field === true));
    if(Object.values(fields).every(field => field === true)){
      this.setState({isValidForm1: true});
    } else {
      this.setState({isValidForm1: false});
    }
    break

    //Casos de validación formulario 2
    case 2:
    if(Object.values(fields).every(field => field === true)){
      this.setState({isValidForm2: true});
    } else {
      this.setState({isValidForm2: false});
    }

    break

    case 3:
    //console.log("Campos de documentos", Object.keys(fields));
    //console.log("Campos pid_front", Object.values(fields)[0]);
    //console.log("Campos check_residence", Object.values(fields)[2]);
    if(this.state.id === 'dni'){
      if(Object.values(fields).every(field => field === true)){
        this.setState({isValidForm3: true});
      } else {
        this.setState({isValidForm3: false});
      }
    } else if(this.state.id === 'passport'){
      this.setState({pid_back: ''});
      //console.log("entradas", Object.entries(fields));
      //console.log("clave", Object.entries(fields)[0][1]);
      //console.log(Object.entries(fields).every((key,value) => key !== "pid_back" && value === true));
        if( Object.entries(fields)[0][1] && Object.entries(fields)[2][1]){
          console.log("cierto");
          this.setState({isValidForm3: true});
        } else {
          console.log("false");
          this.setState({isValidForm3: false});
        }
        
    }
   
 
    break

    default:
    
    break

  }

 
    
}

//handle blur of different form giving the value, className and name
//for pre-validate
handleBlur = input => e => {
  const { value, className, name} = e.target;
  console.log({[input]: className});
  console.log(value);
  switch(name){
    case "firstName":
        console.log(className.split(" "));
        className.split(" ").forEach( element => {
            if(element === "valid"){
              this.validFields1.firstName = true;
              this.FormValidation(1,this.validFields1);
            } else{
              this.validFields1.firstName = false;
              this.FormValidation(1, this.validFields1);
            }
        })      
    break

    case "PlastName":
         console.log("Paternal Surname", className.split(" "));
         className.split(" ").forEach( element => {
          if(element === "valid"){
            this.validFields1.PlastName = true;
            this.FormValidation(1,this.validFields1);
          } else{
            this.validFields1.PlastName = false;
            this.FormValidation(1, this.validFields1);
          }
      })
    break

    case "MlastName":
    console.log("Maternal Surname", className.split(" "));
    className.split(" ").forEach( element => {
     if(element === "valid"){
       this.validFields1.MlastName = true;
       this.FormValidation(1, this.validFields1);
        } else{
          this.validFields1.MlastName = false;
          this.FormValidation(1, this.validFields1);
        }
      })
    break
    
    case "birth":
    console.log("Birth", className.split(" "));
    className.split(" ").forEach( element => {
     if(element === "valid"){
       this.validFields1.birth = true;
       this.FormValidation(1, this.validFields1);
        } else{
          this.validFields1.birth = false;
          this.FormValidation(1, this.validFields1);
        }
      })
    break
    
    case "id_number":
    console.log("id_number", value);
    className.split(" ").forEach( element => {
     if(element === "valid"){
       this.validFields1.id_number = true;
       this.FormValidation(1, this.validFields1);
        } else{
          this.validFields1.id_number = false;
          this.FormValidation(1, this.validFields1);
        }
      })
    break
    
    case "direction":
    console.log("direction", value);
    className.split(" ").forEach( element => {
     if(element === "valid"){
       this.validFields2.direction = true;
       this.FormValidation(2, this.validFields2);
        } else{
          this.validFields2.direction = false;
          this.FormValidation(2, this.validFields2);
        }
      })
    break

    case "city":
    console.log("city", value);
    className.split(" ").forEach( element => {
     if(element === "valid"){
       this.validFields2.city = true;
       this.FormValidation(2, this.validFields2);
        } else{
          this.validFields2.city = false;
          this.FormValidation(2, this.validFields2);
        }
      })
    break

    default:
    
    break

  }
}


  render() {
    const {stepperStyle} = styles;
    const steps = getSteps();
    const activeStep = this.state.step;
    
    return (
        <div className="contents"> 
        <Stepper activeStep={activeStep} style={ stepperStyle } className="hide-on-small-only">
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
        <div className="row white">
        <h4 className="center-align"><span className = "deep-purple-text text-darken-3 center-align"> Your account may take up to 4 business days to be approved</span></h4>
            <p className="deep-orange-text text-darken-4 center-align"> The fields with the "(*)" are required</p>
            <div className="col s12">
               {this.getStepContent(activeStep)}
            </div>
        </div>
        </div>
    );
  }
}

const styles = {
  stepperStyle:{
    background: '#ffff',
    borderBottom: '5px solid #ffff',
    borderRadius: '10px'
  }

}

export default FormStepper;
