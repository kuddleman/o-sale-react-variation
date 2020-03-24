import React, { Component } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'

class CommentList extends Component {
  render() {
    const { comments } = this.props
    let commentList = null

    //modify # of comments to say 'there are no comments" if there are none

    if (!comments || comments.length === 0) {
      return (
        <div className="container">
          <CommentForm 
            onCommentSubmit={ this.props.onCommentSubmit}
            saved={ this.props.saved }
            onResetSaved = { this.props.onResetSaved }
          
          />
          <div className="row">
            <div className="col-md-10 offset-md-1 mt-4">
              <h2 className="comment-header text-center">
                No Comments Yet!
              </h2>
            </div>
          </div>
        </div>
      )
    }
    
    commentList = comments && comments.map( comment => (
      <Comment key={ comment.id} comment={ comment } />
    ))



    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 mt-4">
            <h2 className="comment-header">
            Customer comments ( { comments && comments.length } )
            </h2>
          </div>
           { commentList }
        </div>
      </div>
    )
  }
}

export default CommentList