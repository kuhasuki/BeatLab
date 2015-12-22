var ApiActions = require("../actions/api_actions.js");

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
  upload: function(formData){

    var token = $("meta[name='csrf-token']").attr("content");
 
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
          alert(xhr.responseText);
      }
    }

    xhr.open('POST', '/api/upload', true);

    xhr.setRequestHeader("X-CSRF-Token", token);

    xhr.onload = function () {
      if (xhr.status === 200) {
        // File(s) uploaded.
        console.log('it worked?');
      } else {
        alert('An error occurred!');
      }
    };

    xhr.send(formData);
  }









  // var data = {
  //       "key" : "/tracks/${filename}",
  //       "AWSAccessKeyId" : "AKIAJDDEBE5WYOO3WYAQ",
  //       "acl" : "private",
  //       "success_action_redirect" : "http://google.com",
  //       "policy" : "eyJleHBpcmF0aW9uIjoiMjAxOS0wMS0wMVQwMDowMDowMFoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJzMy1idWNrZXQifSxbInN0YXJ0cy13aXRoIiwiJGtleSIsInVwbG9hZHMvIl0seyJhY2wiOiJwcml2YXRlIn0seyJzdWNjZXNzX2FjdGlvbl9yZWRpcmVjdCI6Imh0dHA6Ly9sb2NhbGhvc3QvIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCIiXSxbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwwLDEwNDg1NzZdXX0=",
  //       "signature": "vLK0nJSlYM/LF2/HGoeUI1mE9UU=",
  //       "Content-Type": "audio/basic"
  //   };
  //   $.ajax({
  //     url: 'https://s3.amazonaws.com/trackwaveaudio',
  //     method: 'POST',
  //     crossDomain: true,
  //     xhrFields: {
  //       withCredentials: true
  //    },
  //     data: data,
  //     success: function(info){
  //       console.log(info);
  //     }
  //   });
  // },
  //   test: function(){
  //   $.get(
  //     '/api/signature', {}, function(data){
  //     console.log(data);
  //   });
};

window.Api = Api;

module.exports = Api;
