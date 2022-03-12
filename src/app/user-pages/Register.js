import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Register extends Component {

constructor(props){
    super(props)
    this.state = {
              password:'',
              phoneno:'',
              firstname:'',
              lastname:'',
              email:'',
              type:'Student',
              responcedata :[],
    }  
   this.onRegister = this.onRegister.bind(this);
  }
  onChangehandler = (event) =>{
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    })

  }

  
	async  onRegister (event) {
		event.preventDefault()
    const sendData ={
      phoneno:this.state.phoneno,
      password:this.state.password,
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      email:this.state.email,
      type:this.state.type,
		
    }

		const response = await fetch('https://metaversesih.herokuapp.com/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(sendData),
		})

		const data = await response.json()

    if (data.status === 'ok') {
			this.props.history.push('/login')
		}
	}


  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <Form className="pt-3">
                <Form.Group >
                  <label htmlFor="exampleInputUsername1">Firstname</label>
                    <Form.Control onChange={this.onChangehandler} name="firstname" type="text" placeholder="Firstname" size="lg" className="h-auto" />
                  </Form.Group>
                  <Form.Group >
                  <label htmlFor="exampleInputUsername1">Lastname</label>
                    <Form.Control onChange={this.onChangehandler} name="lastname" type="text" placeholder="Lastname" size="lg" className="h-auto" />
                  </Form.Group>
                  <Form.Group>
                  <label htmlFor="exampleFormControlSelect1">Category</label>
                  <select onChange={this.onChangehandler} name="type" className="form-control form-control-lg" id="exampleFormControlSelect1">
                    <option>Students</option>
                    <option>Enterprenure</option>
                    <option>Startup</option>
                    <option>Investor</option>
                    <option>Organization</option>
                  </select>
                </Form.Group>
                  <Form.Group >
                  <label htmlFor="exampleInputUsername1">Phone Number</label>
                    <Form.Control onChange={this.onChangehandler} name="phoneno" type="number" placeholder="Phone Number" size="lg" className="h-auto" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Form.Control onChange={this.onChangehandler} name="email" type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                  </Form.Group>
                  <Form.Group >
                  <label htmlFor="exampleInputUsername1">Password</label>
                    <Form.Control onChange={this.onChangehandler} name="password" type="password" placeholder="Password" size="lg" className="h-auto" />
                  </Form.Group>
                  <Form.Group >
                  <label htmlFor="exampleInputUsername1">Re Password</label>
                    <Form.Control onChange={this.onChangehandler} name="repassword" type="password" placeholder="Password" size="lg" className="h-auto" />
                  </Form.Group>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input"/>
                        <i className="input-helper"></i>
                        Accept terms and condition
                      </label>
                    </div>
                   
                  </div>
                  <div className="mt-3">
                    <button onClick={this.onRegister} type="button" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN UP</button>
                  </div>
                 
                
                  <div className="text-center mt-4 font-weight-light">
                   Already have an account? <Link to="/login" className="text-primary">Login</Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
