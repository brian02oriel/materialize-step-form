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
      const { values:{ firstName, PlastName, MlastName, birth, gender, nationality, em_country, id, id_number, direction,city, postal, country, pid_front, pid_back, check_residence} } = this.props;
    return (
        <div className='container'>
                <Fragment>
                    <div className='row'>
                        <div className='col s12 m6'>
                            <div class="card">
                                <div class="card-content">
                                     <span class="card-title">Personal Info</span>
                                     <strong><p><h6>First Name: </h6> {firstName}  </p></strong>
                                     <strong><p><h6>Paternal Surname: </h6> {PlastName}  </p></strong>
                                     <strong><p><h6>Maternal Surname: </h6> {MlastName}  </p></strong>
                                     <strong><p><h6>Birthday: </h6> {birth}  </p></strong>
                                     <strong><p><h6>Gender: </h6> {gender}  </p></strong>
                                     <strong><p><h6>Nationality: </h6> {nationality}  </p></strong>
                                     <strong><p><h6>Emission Country: </h6> {em_country}  </p></strong>
                                     <strong><p><h6>Personal ID: </h6> {id}  </p></strong>
                                     <strong><p><h6>ID Number: </h6> {id_number}  </p></strong>
                                </div>
                            </div>
                        </div>
                        <div className='col s12 m6'>
                        <div class="card">
                                <div class="card-content">
                                     <span class="card-title">Contact Info</span>
                                     <strong><p><h6>Residence: </h6> {direction}  </p></strong>
                                     <strong><p><h6>City: </h6> {city}  </p></strong>
                                     <strong><p><h6>Postal Code: </h6> {postal}  </p></strong>
                                     <strong><p><h6>Country: </h6> {country}  </p></strong>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col s12">
                        <div class="card">
                                <div class="card-content">
                                     <span class="card-title">Required Docs</span>
                                     <strong><p><h6>Identity Check (front): </h6> {pid_front}  </p></strong>
                                     <strong><p><h6>Identity Check (back): </h6> {pid_back} </p></strong>
                                     <strong><p><h6>Residence Check: </h6> {check_residence}  </p></strong>
                                     
                                </div>
                            </div>
                        </div>
                       
                    </div>
                      
            <div className='row'>
                <div className='col s12 m6'> 
                    <button onClick = {this.back} className="waves-effect waves-light btn deep-purple darken-3">
                        Back to the forms
                    </button>
                </div>
                <div className='col s12 m6'> 
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

