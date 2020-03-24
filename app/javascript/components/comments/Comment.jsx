import React from 'react'

const Comment = ({ comment }) => (
  <div class="col-md-10 offset-md-1 comment-block mt-4">
  <div class="comment-body mb-2 mt-3">
  { comment.body }
  </div>
  <small>
    <em>
      Created 
      <span>
        { comment.created_ at }
      </span>  ago by: 
    </em>
    { comment.user.fullname }
  </small>
</div>

)

export default Comment