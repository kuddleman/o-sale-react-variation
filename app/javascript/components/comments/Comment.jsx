import React from 'react'

const Comment = ({ comment }) => (
  <div className="col-md-10 offset-md-1 comment-block mt-4">
  <div className="comment-body mb-2 mt-3">
  { comment.body }
  </div>
  <small>
    <em>
      Created 
      <span>
        { comment.created_at }
      </span>  
    </em>
    { comment.user.fullname }
  </small>
</div>

)

export default Comment