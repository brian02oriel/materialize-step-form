import React, { Component, Fragment } from 'react'
import M from "materialize-css";



export default class FormRequiredDocs extends Component {
    state={
        pid_type: this.props.values.id
    }
  componentDidMount(){
    
    M.AutoInit();
    //let selects = document.querySelectorAll('select');
    //M.FormSelect.init(selects, {});
    
}

handleIdDocs() {
    var type = this.props.values.id;
    if( type === 'dni'){
        return(
            <div className="card">
            <div className="card-content">
                <span class="card-title"> Identity Check (back)</span>
                <p className="deep-orange-text text-darken-4"> Upload a back picture of your DNI or Passport with good resolution</p>
            </div>
            <div className="card-action">
              <div className="btn deep-purple darken-3">
                  <span>Upload File</span>
                  <input type="file"></input>
              </div>
               <input onChange = {this.props.handleChange('pid_back')} id="pid_back" value = {this.props.values.pid_back} type="text" className="file-path validate" required/>
            </div>

        </div>
        )
    }
        
    
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
          <div className='row'>
              <div className='file-field input-field col s12 m6'>
                  <div className="card">
                      <div className="card-content">
                          <span class="card-title"> Identity Check (front)</span>
                          <p className="deep-orange-text text-darken-4"> Upload a front picture of your DNI or Passport with good resolution</p>
                      </div>
                      <div className="card-action">
                        <div className="btn deep-purple darken-3">
                            <span>Upload File</span>
                            <input type="file"></input>
                        </div>
                         <input onChange = {handleChange('pid_front')} id="pid_front" value = {values.pid_front} type="text" className="file-path validate" required/>
                      </div>

                  </div>
              </div>

              <div className='file-field input-field col s12 m6'>
                     {this.handleIdDocs()} 
              </div>
          </div>  
          <div className="row">
                <div className="file-field input-field col s12">
                <div className="card">
                      <div className="card-content">
                          <span class="card-title"> Residence Check </span>
                          <p className="deep-orange-text text-darken-4"> Upload a service bill at your name to validate the residence on your dni or passport</p>
                      </div>
                      <div className="card-action">
                        <div className="btn deep-purple darken-3">
                            <span>Upload File</span>
                            <input type="file"></input>
                        </div>
                         <input onChange = {handleChange('presidence')} id="presidence" value = {values.presidence} type="text" className="file-path validate" required/>
                      </div>

                  </div>
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
