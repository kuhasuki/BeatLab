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
  }
}



window.Api = Api;

module.exports = Api;
