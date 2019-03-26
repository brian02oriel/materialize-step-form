import React, { Component, Fragment } from 'react'
import Countries from './Countries';
import M from "materialize-css";

export default class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            enableButton:'disabled',
         
        }
    }
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

    /*controlButtonState(){
        if(this.state.buttonState === 'disabled' || this.props.buttonState === 'disabled'){
            this.setState({buttonState: 'disabled'});
        } else {

        }
    }*/

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
            <div className="row">
                <div className='col s12 m6'>
                    <label htmlFor="direction">Residence(*)</label>
                    <input name = "direction" pattern="[A-Za-zÀ-ÿ '-,]*" onChange = {handleChange('direction')} onBlur= {handleBlur('direction')} id="direction" value = {values.direction} type="text" className="validate" required placeholder="Home Sweet Home"/>
                    <span class="helper-text" data-error="Intoduce valid characters"></span>
                </div>
                <div className='col s12 m6'>
                    <label htmlFor="city">City(*)</label>
                    <input name = "city" onChange = {handleChange('city')} onBlur= {handleBlur('city')} id="city" value = {values.city} type="text" className="validate" required placeholder="TET City"/>
                    <span class="helper-text" data-error="Intoduce valid characters"></span>
                </div>
             </div>
            <div className='row'>
                <div className='col s12 m6'>
                    <label htmlFor="postal">Postal Code</label>
                    <input onChange = {handleChange('postal')}  id="postal" value = {values.postal} type="number" className="validate" placeholder="000000"/>
                    <span class="helper-text" data-error="Intoduce valid characters"></span>
                </div>
                <div className='input-field col s12 m6'>
                    <Countries   
                        handleChange = {this.props.handleChange}
                        values = {this.props.values.country}
                        type = 'country'/>
                    <label>Country (*)</label>
                </div>
            </div> 
            <div className='row'>
                
                <div className='col s12 m6'> 
                    <button onClick = {this.back} className="waves-effect waves-light btn deep-purple darken-3">
                        Back
                    </button>
                </div>
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

