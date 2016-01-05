json.track do
  json.title @track.title
  json.description @track.description
  json.genre @track.genre
  json.id @track.id
  json.user_id @track.user_id
  json.src @track.cdn
  json.author @track.user.name
end
