json.comments (@comments) do |comment|
  json.id comment.id
  json.body comment.body
  json.created_at comment.created_at
  # json.created_at time_ago_in_words(comment.created_at)
  json.product_id comment.product_id
  json.user do
    json.fullname comment.user.fullname
  end
end

