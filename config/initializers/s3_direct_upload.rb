S3DirectUpload.config do |c|
  c.access_key_id = "AKIAJDDEBE5WYOO3WYAQ"       # your access key id
  c.secret_access_key = "2PpOlAe9gtl7+2555rnijyr6pX2VzQEeiMUm+n7M"   # your secret access key
  c.bucket = "trackwaveaudio"              # your bucket name
  c.region = "s3-us-west-2"             # region prefix of your bucket url. This is _required_ for the non-default AWS region, eg. "s3-eu-west-1"
  c.url = nil                # S3 API endpoint (optional), eg. "https://#{c.bucket}.s3.amazonaws.com/"
end