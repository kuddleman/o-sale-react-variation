import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { inputClasses} from '../../shared/helpers'

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
      price,
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
    this.setState( { [event.target.name] : event.target.value } )  
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

            <div className="form-body-style px-5 pt-4">
              <form className="form-horizontal" onSubmit={ this.handleSubmit }>
                <div className="form-group row">
                  <label 
                    htmlFor="name" 
                    className="col-md-3 col-form-label">
                    Name
                  </label>
                  <div className="col-md-9">
                    <input 
                      type="text"  
                      name="name" 
                      value={ this.state.name }
                      onChange={ this.handleChange }
                      // onBlur={ this.handleBlur }
                      id="name" 
                      className={inputClasses("name", this.state )} 
                      placeholder="Item name" 
                      autoFocus={ true } 
                    />
                      
                        {/* {this.state.erros.name ? 
                          <div className="invalid-feedback">
                          {this.state.errors.name}
                        </div> : null
                        } */}
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="price" className="col-md-3 col-form-label">Price</label>
                  <div className="col-md-9">
                    <input 
                      type="text" 
                      name="price" 
                      value={ this.state.price }
                      onChange={ this.handleChange }
                      // onBlur={ this.handleBlur }
                      id="price" 
                      className="form-control" 
                      placeholder="Item price" 
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="quantity" className="col-md-3 col-form-label">
                    Quantity
                  </label>
                  <div className="col-md-9">
                    <input 
                      type="number" 
                      name="quantity" 
                      value={ this.state.quantity }
                      onChange={ this.handleChange }
                      // onBlur={ this.handleBlur }
                      id="quantity" 
                      className="form-control" 
                      placeholder="Item quantity" 
                    />
                  </div>
                </div>


                <div className="form-group row">
                  <label htmlFor="description" className="col-md-3 col-form-label">
                    Description
                  </label>
                  <div className="col-md-9">
                    <textarea 
                      name="description" 
                      value={ this.state.description }
                      onChange={ this.handleChange }
                      // onBlur={ this.handleBlur }
                      id="description" 
                      className="form-control" 
                      placeholder="Item description here" 
                      rows="5">
                    </textarea>
                  </div>
                </div>

                <div className="form-group row">
                  <label 
                    htmlFor="image" 
                    className="col-md-3 col-form-label">
                      Image
                  </label>
                  <div className="col-md-9">
                    <input 
                      type="file" 
                      name="image" 
                      id="image" 
                      className="form-control"  
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-9 offset-md-3">
                    <input 
                      type="submit" 
                      className="btn btn-outline-purple" 
                      value={ buttonText } 
                    />
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


    )
  }
}

export default NewProductForm