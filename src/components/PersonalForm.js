import React, { Component, Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import Countries from './Countries';
import M from "materialize-css";


export default class PersonalForm extends Component {
    componentDidMount(){
    
        M.AutoInit();
        //let selects = document.querySelectorAll('select');
        //M.FormSelect.init(selects, {});
        /*let picker = document.querySelectorAll('.datepicker');
        M.Datepicker.init(picker, {
            format: 'yyyy-mm-dd',
            selectMonths:true,
            selectYears: 15
        });*/
    }
    continue = e =>{ //e = event
        e.preventDefault();
        this.props.nextStep();
    }

 
  render() {
      const { values, handleChange } = this.props;
    return (
      <div className='container'> 
        <Fragment>
            <div className='row'>
                <div className='col s12 '>
                    <label for="first_name">First Name</label>
                    <input pattern="[A-Za-zÀ-ÿ '-]*" onChange = {handleChange('firstName')} id="first_name" value = {values.firstName} type="text" className="validate" required placeholder="John"/>
                    <span class="helper-text" data-error="Intoduce valid characters"></span>
                </div>
            </div>  
            <div className='row'>
                <div className='col s6 '>
                    <label for="PLast_name">Paternal Surname</label>
                    <input pattern="[A-Za-zÀ-ÿ '-]*" onChange = {handleChange('lastName')} id="PLast_name" value = {values.PlastName} type="text" className="validate" required placeholder="Doe"/>
                    <span class="helper-text" data-error="Intoduce valid characters"></span>
                </div>
                <div className='col s6'>
                    <label for="MLast_name">Maternal Surname</label>
                    <input  pattern="[A-Za-zÀ-ÿ '-]*" onChange = {handleChange('lastName')}  id="MLast_name" value = {values.MlastName} type="text" className="validate" required placeholder="Doe"/>
                    <span class="helper-text" data-error="Intoduce valid characters"></span>
                </div>
            </div>  
            <div className='row'>
                <div className='input-field col s6'>
                    <input onChange = {handleChange('birth')} id="birth" value = {values.birth} type="date"  required/>
                    <label for="birth">Birthday</label>
                    
                </div>
                <div className='input-field col s6' >
                    <select onChange = {handleChange('gender')}  value = {values.gender} required>
                        <option value="" disabled>Choose your option</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <label>Gender</label>
                </div>
            </div>  
            <div className='row'>
                <div className='input-field col s6'>
                    <Countries   
                        handleChange = {this.props.handleChange}
                        values = {this.props.values.nationality}
                        type = 'nationality'/>
                    <label>Nationality</label>
                </div>

                <div className='input-field col s6'>
                     <select onChange = {handleChange('id')}  value = {values.id} required>
                        <option value="" disabled>Choose your option</option>
                        <option value="dni">DNI</option>
                        <option value="passport">Passport</option>
                    </select>
                    <label>Personal ID</label>
                </div>
            </div>  
            <div className='row'>
                 <div className='input-field col s6'>
                    <Countries   
                        handleChange = {this.props.handleChange}
                        values = {this.props.values.em_country}
                        type = 'em_country'/>
                    <label>Emission Country</label>
                </div>

                <div className='input-field col s6'>
                    <label for="id_number">Number</label>
                    <input onChange = {handleChange('id_number')}  id="id_number" value = {values.id_number} type="text" className="validate" required placeholder="000000"/>
                </div>
            </div>  
            <div className='row'>
                <div className='col s6'> 
                    <button onClick = {this.continue} className="waves-effect waves-light btn deep-purple darken-3">
                        Continue
                    </button>
                </div>
            </div>
        </Fragment>
      </div>
    )
  }
}



