import React, { Component, Fragment } from 'react'
import Countries from './Countries';
import M from "materialize-css";

export default class NewFormPersonalDetails extends Component {
    componentDidMount(){
    
        M.AutoInit();
        //let selects = document.querySelectorAll('select');
        //M.FormSelect.init(selects, {});
    }
    
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
        <div className='container'> 
        <Fragment>
            <div className="row">
                <div className='input-field col s6'>
                    <input onChange = {handleChange('direction')} id="direction" value = {values.direction} type="text" className="validate" required/>
                    <label for="direction">Residence</label>
                </div>
                <div className='input-field col s6'>
                    <input onChange = {handleChange('city')} id="city" value = {values.city} type="text" className="validate" required/>
                    <label for="city">City</label>
                </div>
             </div>
            <div className='row'>
                <div className='input-field col s6'>
                    <input onChange = {handleChange('postal')}  id="postal" value = {values.postal} type="number" className="validate" required/>
                    <label for="postal">Postal Code</label>
                </div>
                <div className='input-field col s6'>
                    <Countries   
                        handleChange = {this.props.handleChange}
                        values = {this.props.values.country}
                        type = 'country'/>
                    <label>Country</label>
                </div>
            </div> 
            <div className='row'>
                
                <div className='col s6'> 
                    <button onClick = {this.back} className="waves-effect waves-light btn deep-purple darken-3">
                        Back
                    </button>
                </div>
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

