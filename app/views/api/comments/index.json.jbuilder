json.array! @comments do |comment|
	json.body comment.body
  json.author comment.user.name
end