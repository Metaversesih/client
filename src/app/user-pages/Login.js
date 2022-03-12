import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
              password:'',
              phoneno:'',
              responcedata :[],
    }  
   this.onLogin = this.onLogin.bind(this);
  }
  onChangehandler = (event) =>{
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    })
     
  }

  
	async  onLogin (event) {
		event.preventDefault()
    const sendData ={
      phoneno:this.state.phoneno,
      password:this.state.password,
		
    }

		const response = await fetch('https://metaversesih.herokuapp.com/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(sendData),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
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
                <h4>Sign in to continue</h4>
              
                <Form className="pt-3">
                  <Form.Group >
                  <label htmlFor="exampleInputUsername1">Phone Number</label>
                    <Form.Control onChange={this.onChangehandler} name="phoneno" type="number" placeholder="Phone Number" size="lg" className="h-auto" />
                  </Form.Group>
                  <Form.Group >
                  <label htmlFor="exampleInputUsername1">Password</label>
                    <Form.Control onChange={this.onChangehandler} name="password" type="password" placeholder="Password" size="lg" className="h-auto" />
                  </Form.Group>
                  <div className="mt-3">
                    <button onClick={this.onLogin} type="button" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input"/>
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
                  </div>
                
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <Link to="/register" className="text-primary">Create</Link>
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

export default Login
