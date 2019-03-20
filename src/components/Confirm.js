import React, { Component, Fragment } from 'react'

export default class Confirm extends Component {
    continue = e =>{ //e = event
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
      const { values:{ firstName, PlastName, MlastName, birth, gender, nationality, em_country, id, id_number, direction,city, postal, country, cell, email, pid_front, pid_back, presidence} } = this.props;
    return (
        <div className='container'>
                <Fragment>
                    <div className='row'>
                        <div className='col s12 m6'>
                            <ul className="collection with-header">
                                <li className="collection header"><h4>Personal info</h4></li>
                                <li className="collection-item"> {firstName} </li>
                                <li className="collection-item"> {PlastName} </li>
                                <li className="collection-item"> {MlastName} </li>
                                <li className="collection-item"> {birth} </li>
                                <li className="collection-item"> {gender} </li>
                                <li className="collection-item"> {nationality} </li>
                                <li className="collection-item"> {em_country} </li>
                                <li className="collection-item"> {id} </li>
                                <li className="collection-item"> {id_number} </li>
                            </ul>
                        </div>
                        <div className='col s12 m6'>
                            <ul className="collection with-header">
                                <li className="collection header"><h4>Contact info</h4></li>
                                <li className="collection-item"> {direction} </li>
                                <li className="collection-item"> {city} </li>
                                <li className="collection-item"> {postal} </li>
                                <li className="collection-item"> {country} </li>
                            </ul>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col s12">
                        <ul className="collection with-header">
                                <li className="collection header"><h4>Required Documentation</h4></li>
                                <li className="collection-item"> {pid_front} </li>
                                <li className="collection-item"> {pid_back} </li>
                                <li className="collection-item"> {presidence} </li>
                            </ul>
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
                    Confirm & Continue
                    </button>
                </div>

            </div>
        </Fragment>
        </div>
        
    )
  }
}

