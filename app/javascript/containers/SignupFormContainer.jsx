import React, { Component } from 'react'
import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import SignUpForm from '../components/shared/Form'

class Signup extends Component {
  render() {
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
                state="this.state"
              />
              <Input 
                title="Last Name"
                type="text"
                name="lastname"
                value={ this.state.lastname }
                onChange={ this.handleChange }
                placeholder="Your last name"
                autoFocus={ false }
                state="this.state"
              />
              <Input 
                title="Email"
                type="text"
                name="email"
                value={ this.state.email }
                onChange={ this.handleChange }
                placeholder="Your email address"
                autoFocus={ false }
                state="this.state"
              />
              <Input 
                title="Password"
                type="password"
                name="password"
                value={ this.state.password }
                onChange={ this.handleChange }
                placeholder="Your password"
                autoFocus={ false }
                state="this.state"
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