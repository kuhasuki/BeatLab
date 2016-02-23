json.extract!(
  current_user,
  :name, :profile_pic_url, :session_token, :id
)
json.artist_image_url @artist_image