import React, { Component } from 'react';
import { Dropdown, ButtonGroup } from 'react-bootstrap';

class DetailsView extends Component {
  render () {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            {localStorage.getItem('Pagename')}
          </h3>
       
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Detailed description</h4>
                <p className="card-description"> marked by abundant detail or by thoroughness in treating small items or parts the detailed study of history. Other Words from detailed Synonyms & Antonyms Choose the Right Synonym More Example Sentences Learn More About detailed. </p>
              
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Technology</h4>
                <p className="card-description"> Technology is the sum of any techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation. Technology can be the knowledge of techniques, processes, and the like, or it can be embedded in machines to allow for operation without detailed knowledge of their workings. Systems (e.g. machines) applying technology by taking an input, changing it according to the system's use, and then producing an outcome are referred to as technology systems or technological systems. </p>
              
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Features</h4>
               
                <ul className="list-ticked">
                  <li>This is features</li>
                  <li>This is features</li>
                  <li>This is features</li>
                  <li>This is features</li>
                  <li>This is features</li>
                
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Show Stopper</h4>
               
                <ul className="list-star">
                  <li>This is show stopper</li>
                  <li>This is show stopper</li>
                  <li>This is show stopper</li>
                  <li>This is show stopper</li>
                  <li>This is show stopper</li>
               
                </ul>
              </div>
            </div>
          </div>
         
        </div>
        <div className="row">
        
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="row">
                <div className="col-md-6">
                    <h4 className="card-title">Product info</h4>
                    <p className="card-description">Website , Address , Mail , Contact</p>
                    <div className="template-demo d-flex justify-content-between flex-nowrap">
                      <button type="button" className="btn btn-gradient-primary btn-rounded btn-icon">
                        <i className="mdi mdi-home-outline"></i>
                      </button>
                      <button type="button" className="btn btn-gradient-dark btn-rounded btn-icon">
                        <i className="mdi mdi-internet-explorer"></i>
                      </button>
                      <button type="button" className="btn btn-gradient-danger btn-rounded btn-icon">
                        <i className="mdi mdi-email-open"></i>
                      </button>
                      <button type="button" className="btn btn-gradient-info btn-rounded btn-icon">
                        <i className="mdi mdi-star"></i>
                      </button>
                      <button type="button" className="btn btn-gradient-success btn-rounded btn-icon">
                        <i className="mdi mdi-map-marker"></i>
                      </button>
                    </div>
                    <div className="template-demo d-flex justify-content-between flex-nowrap">
                      <button type="button" className="btn btn-inverse-primary btn-rounded btn-icon">
                        <i className="mdi mdi-home-outline"></i>
                      </button>
                      <button type="button" className="btn btn-inverse-dark btn-icon">
                        <i className="mdi mdi-internet-explorer"></i>
                      </button>
                      <button type="button" className="btn btn-inverse-danger btn-icon">
                        <i className="mdi mdi-email-open"></i>
                      </button>
                      <button type="button" className="btn btn-inverse-info btn-icon">
                        <i className="mdi mdi-star"></i>
                      </button>
                      <button type="button" className="btn btn-inverse-success btn-icon">
                        <i className="mdi mdi-map-marker"></i>
                      </button>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='row'>
                    <div className="col-md-6">
                    <address>
                      <p className="font-weight-bold">Address</p>
                      <p> 695 lsom Ave, </p>
                      <p> Suite 00,Delhi </p>
                      <p> India, 110011 </p>
                    </address>
                  </div>
                  <div className="col-md-6">
                    <address className="text-primary">
                      <p className="font-weight-bold"> E-mail </p>
                      <p className="mb-2"> dheeraj@example.com </p>
                      <p className="font-weight-bold"> Web Address </p>
                      <p> www.metaverse.com </p>
                    </address>
                  </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4 className="card-title">Product Research</h4>
                  
                    <div className="template-demo">
                      <button type="button" className="btn btn-gradient-primary btn-icon-text">
                        <i className="mdi mdi-file-check btn-icon-prepend"></i>
                        PPT
                      </button>
                      <button type="button" className="btn btn-gradient-dark btn-icon-text">
                        DOCUMENT
                        <i className="mdi mdi-file-check btn-icon-append"></i>                          
                      </button>
                      <button type="button" className="btn btn-gradient-success btn-icon-text">
                        <i className="mdi mdi-alert btn-icon-prepend"></i>                                                    
                        Warning
                      </button>
                    </div>
                    <div className="template-demo">
                      <button type="button" className="btn btn-gradient-danger btn-icon-text">
                        <i className="mdi mdi-upload btn-icon-prepend"></i>                                                    
                        DATA
                      </button>
                      <button type="button" className="btn btn-gradient-info btn-icon-text">
                        TECHNOLOGY
                        <i className="mdi mdi-printer btn-icon-append"></i>                                                                              
                      </button>
                      <button type="button" className="btn btn-gradient-warning btn-icon-text">
                        <i className="mdi mdi-reload btn-icon-prepend"></i>   
                        USER REVISITS                                                 
                        
                      </button>
                    </div>
                    <div className="template-demo mt-2">
                      <button type="button" className="btn btn-outline-primary btn-icon-text">
                     
                        USER
                      </button>
                      <button type="button" className="btn btn-outline-secondary btn-icon-text">
                      DE MERITS
                                             
                      </button>
                      <button type="button" className="btn btn-outline-success btn-icon-text">
                                                                        
                      MERITS
                      </button>
                    </div>
                    <div className="template-demo">
                      <button type="button" className="btn btn-outline-danger btn-icon-text">
                                                                  
                        FUTURE SCOPE
                      </button>
                      <button type="button" className="btn btn-outline-info btn-icon-text">
                        REQUIREMENTS
                                                                                           
                      </button>
                      <button type="button" className="btn btn-outline-warning btn-icon-text">
                                                                       
                        TARGET
                      </button>
                    </div>
                    <div className="template-demo mt-2">
                      <button className="btn btn-outline-dark btn-icon-text">
                        <i className="mdi mdi-apple btn-icon-prepend mdi-36px"></i>
                        <span className="d-inline-block text-left">
                          <small className="font-weight-light d-block">Available on the</small>
                          App Store
                        </span>
                      </button>
                      <button className="btn btn-outline-dark btn-icon-text">
                        <i className="mdi mdi-android-debug-bridge btn-icon-prepend mdi-36px"></i>
                        <span className="d-inline-block text-left">
                          <small className="font-weight-light d-block">Get it on the</small>
                          Google Play
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Social Media links</h4>
           
                <div className="template-demo">
                  <button type="button" className="btn btn-social-icon-text btn-facebook"><i className="mdi mdi-facebook"></i>Facebook</button>
                  <button type="button" className="btn btn-social-icon-text btn-youtube"><i className="mdi mdi-youtube"></i>Youtube</button>                                        
                  <button type="button" className="btn btn-social-icon-text btn-twitter"><i className="mdi mdi-twitter"></i>Twitter</button>
                  <button type="button" className="btn btn-social-icon-text btn-dribbble"><i className="mdi mdi-dribbble"></i>Dribbble</button>
                  <button type="button" className="btn btn-social-icon-text btn-linkedin"><i className="mdi mdi-linkedin"></i>Linkedin</button>
                  <button type="button" className="btn btn-social-icon-text btn-google"><i className="mdi mdi-google-plus"></i>Google</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Investment</h4>
               
                <div className="template-demo">
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-primary">Investment 1</button>
                   
                  </Dropdown>
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-danger">Investment 2</button>
                   
                  </Dropdown>
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-success">Investment 3</button>
                  
                  </Dropdown>
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-secondary">Investment 4</button>
                 
                  </Dropdown>
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-info">Investment 5</button>
                   
                  </Dropdown>
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-warning">Investment 6</button>
                  
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsView;