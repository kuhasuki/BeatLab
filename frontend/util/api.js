var ApiActions = require("../actions/api_actions.js");

Api = {
  login: function(name, password){
    $.post('/sessions', {"user": {"name": name, "password": password}}, function(data){
      ApiActions.loginAttempt(data);
    });
  }
}



window.Api = Api;

module.exports = Api;
