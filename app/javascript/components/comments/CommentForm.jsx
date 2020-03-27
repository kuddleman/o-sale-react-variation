import React, { Component } from 'react'

//import ErrorMessages from '../shared/ErrorMessages'
import TextArea from '../shared/TextArea'
import Button from '../shared/Button'
import Form from '../shared/Form'
import { verifyAndSetFieldErrors } from '../../shared/helpers'
import axios from 'axios'

class CommentForm extends Component {
  state = {
    body: ''
    
  }

  handleSubmit = (event) => {
    console.log("This is the handleSubmit function!")
    event.preventDefault()
    this.props.onCommentSubmit(this.state)
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

 

  render() {
    
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h1 className="text-center form-header-style mt-5 pt-2 pb-3">
              Add New Comment
            </h1>
              <Form onSubmit={this.handleSubmit}>
                <TextArea
                  title="Description"
                  name="body"
                  value={this.state.body}
                  onChange={this.handleChange}
                  //onBlur={this.handleBlur}
                  placeholder="Comment here"
                  rows="5"
                  state={this.state}
                  autoFocus={true}
                />
                <Button>Create Comment</Button>
              </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentForm
