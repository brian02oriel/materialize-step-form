import React, { Component, Fragment } from 'react';
import Countries from './Countries';
import M from "materialize-css";
import $ from 'jquery';



export default class PersonalForm extends Component {
    state = {
        id_selection:'',
        buttonState: 'disabled',
        validation: 0
    }

    componentDidMount(){
        M.AutoInit();

    }

  
    Validate(){
      /*  var decision = false;
        var invalids = 0;
        invalids = document.getElementsByClassName("invalid");
        var inputs = document.querySelectorAll('input');
        var select = document.querySelectorAll('select');
        [].slice.call(inputs).forEach(function(input){
            if(!input.value.trim){
                this.setState({buttonState: "enable"})
            }
        })*/

        let valid = document.getElementsByClassName("valid").length;
        console.log(valid);
        if(valid >= 1){
            this.setState({buttonState: " "})
            console.log(this.state.buttonState);
        }
        

       // console.log(inputs);
        
    }

    continue = e =>{ //e = event
        e.preventDefault();
        this.props.nextStep();
    }

    handleSelect= e =>{
        e.preventDefault();
        this.props.handleChange('id');
        this.setState({id_selection: e.target.value});
    }

    handleIdentity(handleChange, values){
        
        var selection = this.state.id_selection;
        console.log(selection)
        if(selection === 'dni') {
            return(
                <div className='col s6'>
                    <label for="id_number">DNI(*)</label>
                    <input pattern="[0-9A-Z-]*" onChange = {handleChange('id_number')} id="id_number" value = {values.id_number} type="text" className="validate" required placeholder="000000"/>
                </div>
            )
        } else if(selection === 'passport'){
            return(
                <div className='col s6'>
                     <label for="id_number">Passport(*)</label>
                     <input pattern="[0-9A-Z-]*" onChange = {handleChange('id_number')}  id="id_number" value = {values.id_number} type="text" className="validate" required placeholder="000000"/>
                </div>

            )
        }
    }

  render() {
      const { values, handleChange } = this.props;
    return (
      <div className='container'> 
        <Fragment>
            <div className='row'>
                <div className='col s12 '>
                    <label for="first_name">First Name(*)</label>
                    <input pattern="[A-Za-zÀ-ÿ '-]*" onChange = {handleChange('firstName')}  onBlur = {this.Validate()} id="first_name" value = {values.firstName} type="text" className="validate" required placeholder="John"/>
                    <span class="helper-text" data-error="Intoduce valid characters"></span>
                </div>
            </div>  
            <div className='row'>
                <div className='col s6 '>
                    <label for="PLast_name">Paternal Surname(*)</label>
                    <input pattern="[A-Za-zÀ-ÿ '-]*" onChange = {handleChange('PlastName')} onBlur = {this.Validate} id="PLast_name" value = {values.PlastName} type="text" className="validate" required placeholder="Doe"/>
                    <span class="helper-text" data-error="Intoduce valid characters"></span>
                </div>
                <div className='col s6'>
                    <label for="MLast_name">Maternal Surname(*)</label>
                    <input  pattern="[A-Za-zÀ-ÿ '-]*" onChange = {handleChange('MlastName')} onBlur = {this.Validate} id="MLast_name" value = {values.MlastName} type="text" className="validate" required placeholder="Doe"/>
                    <span class="helper-text" data-error="Intoduce valid characters"></span>
                </div>
            </div>  
            <div className='row'>
                <div className='input-field col s6'>
                    <input onChange = {handleChange('birth')} id="birth" value = {values.birth} onBlur = {this.Validate} type="date"  required/>
                    <label for="birth">Birthday(*)</label>
                    
                </div>
                <div className='input-field col s6' >
                    <select onChange = {handleChange('gender')}  value = {values.gender} required>
                        <option value="" disabled>Choose your option</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <label>Gender(*)</label>
                </div>
            </div>  
            <div className='row'>
                <div className='input-field col s6'>
                    <Countries   
                        handleChange = {this.props.handleChange}
                        values = {this.props.values.nationality}
                        type = 'nationality'/>
                    <label>Nationality(*)</label>
                </div>

                <div className='input-field col s6'>
                     <select onChange = {this.handleSelect}  value = {values.id} required >
                        <option value="" disabled>Choose your option</option>
                        <option value="dni">DNI</option>
                        <option value="passport">Passport</option>
                    </select>
                    <label>Personal ID(*)</label>
                </div>
            </div>  
            <div className='row'>
                 <div className='input-field col s6'>
                    <Countries   
                        handleChange = {this.props.handleChange}
                        values = {this.props.values.em_country}
                        type = 'em_country'/>
                    <label>Emission Country(*)</label>
                </div>
                { this.handleIdentity(this.props.handleChange, this.props.values) }       
            </div>  
            <div className='row'>
                <div className='col s6'> 
                    <button onClick = {this.continue} className={ "waves-effect waves-light btn deep-purple darken-3 " + this.state.buttonState }>
                        Continue
                    </button>
                </div>
            </div>
        </Fragment>
      </div>
    )
  }
}



