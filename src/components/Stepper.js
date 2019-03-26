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
    presidence: ''

   
    
}


// Get the steps contents
getStepContent(step) {
  const {firstName, PlastName, MlastName, birth, gender, nationality, em_country, id, id_number, direction,city, postal, country, pid_front, pid_back, presidence} = this.state;
  const values = {firstName, PlastName, MlastName, birth, gender, nationality, em_country, id, id_number, direction,city, postal, country, pid_front, pid_back, presidence};
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
          />
        )
      case 1:
     
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

    case "presidence":
    console.log("presidence", value);
     if(value){
       this.validFields3.presidence = true;
       this.FormValidation(3, this.validFields3);
        } else{
          this.validFields3.presidence = false;
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
  id_numer: false
}

validFields2 = {
  direction: false, 
  city: false,
  country: false,
}

validFields3 = {
  pid_front: false, 
  pid_back: false,
  presidence: false,
}

//Validate all the 3 forms
FormValidation(form, fields){ 
  //console.log("Validacion form", form);
  //console.log(this.validFields1);
  //console.log("Campos ",fields);
  switch(form){
    //Casos de validación formulario 1
    case 1:
    Object.keys(fields).forEach(field =>{
      //console.log("Recorriendo campos", field, fields[field]);
  
      if(fields[field]){
        //console.log("campo cierto", field);
        this.setState({isValidForm1: true});
      } else{
        //console.log("campo falso", field);
        this.setState({isValidForm1: false});
      }
    })
    break

    //Casos de validación formulario 2
    case 2:
    Object.keys(fields).forEach(field =>{
      //console.log("Recorriendo campos", field, fields[field]);
  
      if(fields[field]){
        //console.log("campo cierto", field);
        this.setState({isValidForm2: true});
      } else{
        //console.log("campo falso", field);
        this.setState({isValidForm2: false});
      }
    })
    break

    case 3:
    Object.keys(fields).forEach(field =>{
      //console.log("Recorriendo campos", field, fields[field]);
  
      if(fields[field]){
        //console.log("campo cierto", field);
        this.setState({isValidForm3: true});
      } else{
        //console.log("campo falso", field);
        this.setState({isValidForm3: false});
      }
    })
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
