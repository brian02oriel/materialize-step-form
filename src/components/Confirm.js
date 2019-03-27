import React, { Component, Fragment } from 'react'

export default class Confirm extends Component {
    continue = e =>{ //e = event
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
        console.log("event", e);
        console.log("prevStep", this.props.prevStep());
    }

  render() {
      const { values:{ firstName, PlastName, MlastName, birth, gender, nationality, em_country, id, id_number, direction,city, postal, country, pid_front, pid_back, check_residence} } = this.props;
    return (
        <div className='container'>
                <Fragment>
                    <div className='row'>
                        <div className='col s12 m6'>
                            <div className="card">
                                <div className="card-content">
                                     <span className="card-title">Personal Info</span>
                                     <strong><h6>First Name: </h6> </strong> <p> {firstName}  </p>
                                     <strong><h6>Paternal Surname: </h6> </strong>   <p> {PlastName}  </p>
                                     <strong><h6>Maternal Surname: </h6> </strong>   <p> {MlastName}  </p>
                                     <strong><h6>Birthday: </h6></strong>    <p> {birth}  </p>
                                     <strong><h6>Gender: </h6></strong>  <p> {gender}  </p>
                                     <strong><h6>Nationality: </h6></strong> <p> {nationality}  </p>
                                     <strong><h6>Emission Country: </h6></strong>    <p> {em_country}  </p>
                                     <strong><h6>Personal ID: </h6></strong> <p> {id}  </p>
                                     <strong><h6>ID Number: </h6> </strong>  <p> {id_number}  </p>
                                </div>
                            </div>
                        </div>
                        <div className='col s12 m6'>
                        <div className="card">
                                <div className="card-content">
                                     <span className="card-title">Contact Info</span>
                                     <strong><h6>Residence: </h6></strong>  <p> {direction}  </p>
                                     <strong><h6>City: </h6></strong>   <p> {city}  </p>
                                     <strong><h6>Postal Code: </h6></strong>    <p> {postal}  </p>
                                     <strong><h6>Country: </h6></strong>    <p> {country}  </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col s12">
                        <div className="card">
                                <div className="card-content">
                                     <span className="card-title">Required Docs</span>
                                     <strong><h6>Identity Check (front): </h6></strong>    <p> {pid_front}  </p>
                                     <strong><h6>Identity Check (back): </h6></strong>  <p> {pid_back} </p>
                                     <strong><h6>Residence Check: </h6></strong>    <p> {check_residence}  </p>
                                     
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

