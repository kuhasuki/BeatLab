var ApiActions = require("../actions/api_actions.js");
var AlertActions = require("../actions/alert_actions.js");

Api = {
  login: function(name, password){
    $.post('/sessions', {"user": {"name": name, "password": password}}, function(data){
      ApiActions.loginAttempt(data);
    });
  },

  register: function(name, password){
    $.post('/users', {"user": {"name": name, "password": password}}, function(data){
      ApiActions.registerAttempt(data);
    });
  },

  verifySession: function(){
  	$.get('/sessions', {}, function(data){
  		ApiActions.checkSession(data);
  	});
  },

  fetchTracks: function(){
    $.get('/api/tracks', {}, function(data){
      ApiActions.fetchTracks(data);
    });
  },

  fetchMyTracks: function(id){
    $.get('/api/tracks/' + id, {}, function(data){
      ApiActions.fetchMyTracks(data);
    });
  },

  getUserInfo: function(id){
    $.get('/users/' + id, {}, function(data){
      ApiActions.getUserInfo(data);
    });
  },

  submitComment: function(body, track_id){
    $.post('/api/comment/', {"comment": {"body": body, "track_id": track_id}}, function(data){
      console.log(data);
      ApiActions.addComment(data);
    }).fail(function() {
      AlertActions.danger("You must write something to leave a comment", 3000);
      ApiActions.failedComment(data);
  });
  },

  fetchComments: function(id){
    $.get('/api/comments/' + id, {}, function(data){
      ApiActions.fetchComments(data);
    });
  },

  upload: function(formData){

    var token = $("meta[name='csrf-token']").attr("content");
 
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      switch(xhr.readyState) {
          case 0:
            // request not initialized 
            console.log('initializing');
            break;
          case 1:
            // server connection established
            console.log('connection established');
            break;
          case 2:
            // request received
            console.log('request recieved');
            break;
          case 3:
            // processing request 
            console.log('processing');
            break;
          case 4:
            // request finished and response is ready
            console.log('finished');
            break;
      }
    }

    xhr.open('POST', '/api/upload', true);

    xhr.setRequestHeader("X-CSRF-Token", token);

    xhr.onload = function () {
      if (xhr.status === 200) {
        // File(s) uploaded.
        ApiActions.uploadSuccess(xhr.responseText);
        AlertActions.success("Track successfully uploaded", 2000);
      } else {
        ApiActions.uploadFailure(xhr.responseText);
        console.log(xhr.responseText);
        console.log(JSON.parse(xhr.responseText));
        AlertActions.danger(JSON.parse(xhr.responseText), null);
      }
    };

    xhr.send(formData);
  }
};

window.Api = Api;

module.exports = Api;
