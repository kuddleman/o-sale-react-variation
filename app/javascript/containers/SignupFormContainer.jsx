import React, { Component } from 'react'
import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import SignUpForm from '../components/shared/Form'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Signup extends Component {

  state= {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    errors: {},
    toHomePage: false
   
  }

  handleChange = ( event ) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = ( event ) => {
    event.preventDefault()
    const { firstname, lastname, email, password } = this.state

    const newUser = {
      user: {
        first_name: firstname,
        last_name: lastname,
        email,
        password
      }
    }
    this.handleSignup( newUser )
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      toHomePage: true
    })

  }

  handleSignup = ( user ) => {
    axios
      .post('api/v1/users/json', user)
      .then( response => {
        this.props.onFetchCurrentUser()
      })
      .catch( error => console.log( error ) )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const fieldNames = ["firstname", "lastname", "email", "password"]
    //verifyAndSetFieldErrors(this, fieldNames)
  }

  render() {
    if (this.state.toHomePage || this.props.currentUser) {
      return <Redirect to="/" />
    }
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 className="text-center form-header-style mt-5 pt-2 pd-3">
              Sign Up
            </h1>
            <SignUpForm onSubmit={ this.handleSubmit }>
              <Input 
                title="First Name"
                type="text"
                name="firstname"
                value={ this.state.firstname }
                onChange={ this.handleChange }
                placeholder="Your first name"
                autoFocus={ true }
                state={this.state}
              />
              <Input 
                title="Last Name"
                type="text"
                name="lastname"
                value={ this.state.lastname }
                onChange={ this.handleChange }
                placeholder="Your last name"
                autoFocus={ false }
                state={this.state}
              />
              <Input 
                title="Email"
                type="text"
                name="email"
                value={ this.state.email }
                onChange={ this.handleChange }
                placeholder="Your email address"
                autoFocus={ false }
                state={this.state}
              />
              <Input 
                title="Password"
                type="password"
                name="password"
                value={ this.state.password }
                onChange={ this.handleChange }
                placeholder="Your password"
                autoFocus={ false }
                state={this.state}
              />
              <Button>Sign Up</Button>
            </SignUpForm>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup