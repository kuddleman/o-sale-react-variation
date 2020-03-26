import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ProductForm from './ProductForm'

class NewProductForm extends Component {
    state= {
      name: '',
      description: '',
      price: '',
      quantity: '',
      errors: {}
    }
    
  handleSubmit = event  => {
    event.preventDefault()

    const { name, description, price, quantity} = this.state

    const newProduct = {
      name,
      description,
      price: parseFloat(price),
      quantity
    }
    this.props.onSubmit( newProduct )
    this.setState({
      name: '',
      price: '',
      description: '',
      quantity: '',
      
    })
    
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
    //this.setState( { [event.target.name] : event.target.value } )  
  }

  // checkErrors = ( state, fieldName ) => {
  //   const error = {}

  //   switch (fieldName) {
  //     case 'name':
  //       if (!state.name) {
  //         error.name = 'Please provide a name'
  //       }
  //       break
  //     case 'description':
  //       if (!state.description) {
  //         error.description = 'Please provide a description'
  //       }
  //       break 
  //     case 'price':
  //       if (parseFloat(state.price) <= 0.0 ||
  //           !state.price.toString().match(/^\d{1,}(\.\d{0,2})?$/)) {
  //         error.price = 'Price has to be a positive number'
  //       }
  //       break 
  //     case 'price':
  //       if (parseInt(state.quantity, 10) <= 0 ||
  //           !state.quantity.toString().match(/^\d{1,}$/)) {
  //         error.message = 'Quantity has to be a positive whole number'
  //       }
  //       break          
  //   }

  //   return error
  // }

  // handleBlur = event => {
  //   const { name } = event.target
  //   const fieldError = this.checkErrors(this.state, name)
  //   const errors = Object.assign({}, this.state.errors, fieldError)
  //   this.setState({errors})
  // }

  render() {
    const buttonText = "Create Product"
    const title = "Add New Product"
    return (
      <div className="container mb-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card panel-div">
            <h1 className="text-center form-header-style pt-2 pb-3">
              { title }
            </h1>

            <ProductForm 
              onSubmit={ this.handleSubmit }
              onChange={ this.handleChange }
              state= { this.state }
              buttonText={ buttonText }
              />
            
          </div>
        </div>
      </div>
    </div>
    )
  }
}

// NewProductForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   serverErrors: PropTypes.array.isRequired,
//   saved: PropTypes.bool.isRequired,
//   onResetSaved: PropTypes.func.isRequired
// }

export default NewProductForm