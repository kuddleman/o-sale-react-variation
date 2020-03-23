import React from 'react'
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