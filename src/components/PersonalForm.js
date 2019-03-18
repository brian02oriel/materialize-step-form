import React, { Component, Fragment } from 'react'
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
                <div className='input-field col s6 '>
                    <input onChange = {handleChange('firstName')} id="first_name" value = {values.firstName} type="text" className="validate" required placeholder="John"/>
                    <label for="first_name">First Name</label>
                </div>
                <div className='input-field col s6'>
                    <input onChange = {handleChange('lastName')}  id="last_name" value = {values.lastName} type="text" className="validate" required placeholder="Doe"/>
                    <label for="last_name">Last Name</label>
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
                    <input onChange = {handleChange('id_number')}  id="id_number" value = {values.id_number} type="text" className="validate" required placeholder="000000"/>
                    <label for="id_number">Number</label>
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



