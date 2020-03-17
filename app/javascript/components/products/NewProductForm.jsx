import React, { Component } from 'react'

class NewProductForm extends Component {

  constructor(props) {
    super(props)

    this.state= {
      name: '',
      description: '',
      price: '',
      quantity: '',
      errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("I have SUBMITTED!")
    console.log(this.state)
  }

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
                      id="name" 
                      className="form-control" 
                      placeholder="Item name" 
                      autoFocus={ true } 
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="price" className="col-md-3 col-form-label">Price</label>
                  <div className="col-md-9">
                    <input 
                      type="text" 
                      name="price" 
                      id="price" 
                      className="form-control" 
                      placeholder="Item price" 
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