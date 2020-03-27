import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import SigninForm from '../components/shared/Form'

class Signin extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    toHomePage: false
  }

  handleChange = event => {
    const { name, value} = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    //const fieldNames = ["email", "password"]

    const user = {
      email: this.state.email,
      password: this.state.password
    }
    console.log("We are in HANDLE SUBMIT")
    this.handleSignin( user )
  }

  handleSignin = user => {
  
    axios
    //  .post('/api/v1/siginin.json'.user)
     //.post('/api/v1/siginin.json',user)
     .post('/api/v1/signin',user)

     .then( response => {
      
        this.props.onFetchCurrentUser()
      
       this.setState({ toHomePage: true })
     })
     .catch(error => {
       console.log( error.response )
     })
    
  }


  render() {
    if (this.state.toHomePage) {
      return <Redirect to='/' />
    }
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 className="text-center form-header-style mt-5 pt-2 pb-3">
              Sign In
            </h1>
            <SigninForm onSubmit={ this.handleSubmit }>
              <Input 
                title="Email"
                type="email"
                name="email"
                value={ this.state.email}
                onChange={ this.handleChange }
                placeholder="Your email address"
                autoFocus={ true }
                state={ this.state }
              />
              <Input 
                title="Password"
                type="password"
                name="password"
                value={ this.state.password }
                onChange={ this.handleChange }
                placeholder="Your password"
                autoFocus={ false }
                state={ this.state }
              />
              <Button>Sign in</Button>
            </SigninForm>
          </div>
        </div>
      </div>
    )
  }
}

export default Signin
