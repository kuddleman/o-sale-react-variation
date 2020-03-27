import React, { Component } from 'react'
import axios from 'axios'

import ProductForm from '../components/products/ProductForm'

class EditProductForm extends Component {
  state = {
    name: '',
    description: '',
    price: '',
    quantity: '',
    saved: false
  }

componentDidMount = () => {
  const id = this.props.match && +this.props.match.params.id
  if (id) {
    this.getProduct(id)
  }
}

componentWillUnmount = () => {
  const id = this.props.match && this.props.match.params.id
  id && this.props.onEdit("edited")
  this.props.onUpdate(false)

  
}

getProduct = id => {
  console.log("getPRODUCT is being called")
  axios
  .get(`/api/v1/products/${id}`)
  .then( response => {
    const product = response.data
    console.log("This is the FIRST PRODUCT:", product)
    const idx = product.price.search(/\d/)
    product.price = product.price.slice( idx )
    console.log("This is the PRODUCT:", product)
    this.setState({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity
    }), () => {
      this.props.onEdit()
    }
  })
  .catch( error => console.log( error ))
}

resetSaved = () => {
  this.setState({
    saved: false,
  })
}

handleChange = event => {
  const { name, value } = event.target
  this.setState( { [name]: value })
}

handleSubmit = event => {
  event.preventDefault()

  const fieldNames = [ "name", "description", "price", "quantity" ]
  const editedProduct = {
    id: this.state.id,
    name: this.state.name,
    description: this.state.description,
    price: parseFloat( this.state.price ),
    quantity: parseInt( this.state.quantity, 10 )
  }

  this.handleProductUpdate( editedProduct )
   
}

handleProductUpdate = (data) => {
  const updatedProduct = {
    product: { ...data }
  }

  axios
    .put(`/api/v1/products/${data.id}`, updatedProduct )
    .then( response => {
      const { product } = response.data
      this.setState({
        ...product,
        serverErrors: [],
        saved: true
      })
      this.props.onUpdate(true)
      this.props.history.push(`/products/${ data.id }`)
      
    })
    .catch( error => {
      const updatedErrors = [
        ...this.state.serverErrors,
        ...error.response.data
      ]
      // use Set to get rid of duplicate errors from const updatedErrors.  
      const errorsSet = new Set( updatedErrors )
      this.setState({ serverErrors: [ ...errorsSet ]})
    })
}

  render() {
    const buttonText = 'Update Product'
    const title = 'Editing Product'
    return (
      <div className="container mb-r">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card panel-div">
              <h1 className="text-center form-header-style pt-2 pb-3">
                { title }
              </h1>
                <ProductForm 
                  onSubmit={ this.handleSubmit }
                  state={ this.state }
                  onChange={ this.handleChange }
                  buttonText={ buttonText }
                />
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default EditProductForm