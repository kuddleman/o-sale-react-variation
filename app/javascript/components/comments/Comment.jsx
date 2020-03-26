import React from 'react'
import moment from 'moment'

const Comment = ({ comment }) => (
  <div className="col-md-10 offset-md-1 comment-block mt-4">
  <div className="comment-body mb-2 mt-3">
  { comment.body }
  </div>
  <small>
    <em>
      Created &nbsp;
      <span>
        { moment(comment.created_at).startOf('minute').fromNow() }
      </span> by:&nbsp;
    </em>
    {/* { comment.user.fullname } */}
  </small>
</div>

)

export default Comment