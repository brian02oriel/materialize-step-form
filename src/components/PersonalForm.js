import React, { Component, Fragment } from 'react';
import Countries from './Countries';
import M from "materialize-css";
//import $ from 'jquery';
//import "./Validator";


export default class PersonalForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id_selection:'',
            enableButton:'disabled',

        }
    }

    componentWillMount(){
        console.log("Component Will Mount ")    ;
    }

    componentDidMount(){
        console.log("Component Did Mount ")    ;
        M.AutoInit();
    }

     

   /* componentWillReceiveProps(nextProps){
        console.log("Component Will Receive Props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Should Component update", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("Component Will Update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState){
       console.log("Component Did Update", prevProps, prevState);
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }*/
  

    continue = e =>{ //e = event
        e.preventDefault();
        this.props.nextStep();
    }
    handleValidation = (e) =>{
        console.log(e);

    }

    handleSelect= e =>{
        e.preventDefault();
        //this.props.handleChange('id');
        //console.log(this.props.values.id)
        console.log(e.target.className);
        this.setState({id_selection: e.target.value});
    }

    handleIdentity(handleChange, values, handleBlur){
        
        var selection = this.state.id_selection;
       
       //console.log(selection);
        if(selection === 'dni') {
            return(
                <div className='col s6'>
                    <label htmlFor="id_number">DNI(*)</label>
                    <input name = "id_number" pattern="[0-9A-Z-]*" onChange = {handleChange('id_number')} onBlur = {handleBlur('id_number')} id="id_number" value = {values.id_number} type="text" className="validate" required placeholder="000000"/>
                </div>
            )
        } else if(selection === 'passport'){
            return(
                <div className='col s6'>
                     <label htmlFor="id_number">Passport(*)</label>
                     <input name = "id_number" pattern="[0-9A-Z-]*" onChange = {handleChange('id_number')}  onBlur = {handleBlur('id_number')} id="id_number" value = {values.id_number} type="text" className="validate" required placeholder="000000"/>
                </div>

            )
        }
    }
formValid(isValid){ 
    //console.log(isValid);
    if(isValid){
        if(this.state.enableButton !== ''){
            this.setState({enableButton: ''});
        }
        return(<h4> Valido </h4>)
    } else {
        if(this.state.enableButton !== 'disabled'){
            this.setState({enableButton: 'disabled'});
        }
        return(<h4> Invalido </h4>)
    }
}
  render() {
      const { values, handleChange, handleBlur, isValid} = this.props;
    return (
        
      <div className='container'> 
      <div>{this.formValid(isValid)}</div>
        <Fragment>
            <div className='row'>
                <div className='col s12 '>
                    <label htmlFor="first_name">First Name(*)</label>
                    <input name="firstName" pattern="[A-Za-zÀ-ÿ '-]*" onChange = {handleChange('firstName')} onBlur = {handleBlur('firstName')} id="first_name" value = {values.firstName} type="text" className="validate" required placeholder="John"/>
                    <span class="helper-text" data-error="Intoduce valid characters"></span>
                </div>
            </div>  
            <div className='row'>
                <div className='col s12 m6'>
                    <label htmlFor="PLast_name">Paternal Surname(*)</label>
                    <input name="PlastName" pattern="[A-Za-zÀ-ÿ '-]*" onChange = {handleChange('PlastName')} onBlur = {handleBlur('PlastName')} id="PLast_name" value = {values.PlastName} type="text" className="validate" required placeholder="Doe"/>
                    <span class="helper-text" data-error="Intoduce valid characters"></span>
                </div>
                <div className='col s12 m6'>
                    <label htmlFor="MLast_name">Maternal Surname(*)</label>
                    <input  name="MlastName" pattern="[A-Za-zÀ-ÿ '-]*" onChange = {handleChange('MlastName')}  onBlur = {handleBlur('PlastName')} id="MLast_name" value = {values.MlastName} type="text" className="validate" required placeholder="Doe"/>
                    <span class="helper-text" data-error="Intoduce valid characters"></span>
                </div>
            </div>  
            <div className='row input-field'>
                <div className=' col s12 m6'>
                <label htmlFor="birth">Birthday(*)</label>
                    <input name="birth" onChange = {handleChange('birth')} onBlur = {handleBlur('birth')} id="birth" value = {values.birth}  type="date"  className="validate" required/>
                    
                    
                    
                </div>
                <div className='input-field col s12 m6' >
                    <select name="gender" onChange = {handleChange('gender')}  value = {values.gender} required>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <label>Gender(*)</label>
                </div>
            </div>  
            <div className='row'>
                <div className='input-field col s12 m6'>
                    <Countries   
                        handleChange = {this.props.handleChange}
                        values = {this.props.values.nationality}
                        type = 'nationality'/>
                    <label>Nationality(*)</label>
                </div>

                <div className='input-field col s12 m6'>
                     <select name="id_type" onChange = {handleChange('id')} onChangeCapture= {this.handleSelect} value = {values.id} required >
                        <option value="" disabled>Choose your option</option>
                        <option value="dni">DNI</option>
                        <option value="passport">Passport</option>
                    </select>
                    <label>Personal ID(*)</label>
                </div>
            </div>  
            <div className='row'>
                 <div className='input-field col s12 m6'>
                    <Countries   
                        handleChange = {this.props.handleChange}
                        values = {this.props.values.em_country}
                        type = 'em_country'/>
                    <label>Emission Country(*)</label>
                </div>
                { this.handleIdentity(this.props.handleChange, this.props.values, this.props.handleBlur) }       
            </div>  
            <div className='row'>
                <div className='col s12 m6'> 
                    <button onClick = {this.continue} className={ "waves-effect waves-light btn deep-purple darken-3 " + this.state.enableButton }>
                        Continue
                    </button>
                </div>
            </div>
        </Fragment>
      </div>
    )
  }
}



