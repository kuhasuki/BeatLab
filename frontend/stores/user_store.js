var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var UserStore = new Store(Dispatcher);

var DispatchConstants = require('../constants/dispatch_constants.js');

var AlertActions = require('../actions/alert_actions.js');
//
// BenchStore.all = function () {
// return _benches.slice(0);
// };
//
// BenchStore.repopulateAll = function (benches) {
//   _benches = [];
//   benches.benches.forEach(function(bench){
//     _benches.push(bench);
//   })
// };
var _benches = [];
var _error = '';
var _loggedIn = null;
var _user = {};

UserStore.updateError = function(error){
  console.log(error);
  _error = error;
};

UserStore.getError = function(){
  return _error;
};

UserStore.login = function(user){
  _loggedIn = true;
  _user = user;
  localStorage.token = user.session_token;
};

UserStore.logout = function(user){
  _loggedIn = false;
  _user = {};
  if(localStorage.token){
    localStorage.removeItem('token');
  }
};

UserStore.getUser = function(){
  return _user;
};

UserStore.isLoggedIn = function(){
  if(localStorage.token){
    return !!localStorage.token;
  } else {
    return false;
  }
};

UserStore.loginStatus = function(){
  return _loggedIn;
};

UserStore.__onDispatch = function (payload) {
  _error = "";
  switch (payload.actionType) {
    case DispatchConstants.LOGIN_SUCCESS:
      UserStore.login(payload.user);
      AlertActions.success("Logged in successfully", 2000);
      UserStore.__emitChange();
      break;
    case DispatchConstants.LOGIN_FAILURE:
      console.log("failed to log in");
      UserStore.updateError(payload.error);
      UserStore.__emitChange();
      break;
    case DispatchConstants.REGISTRATION_SUCCESS:
      AlertActions.success("Registered Successfully", 2000);
      UserStore.login(payload.user);
      UserStore.__emitChange();
      break;
    case DispatchConstants.REGISTRATION_FAILURE:
      console.log("failed to register and log in");
      UserStore.updateError(payload.error);
      UserStore.__emitChange();
      break;
    case DispatchConstants.LOGGED_IN:
      console.log("Logged in");
      UserStore.login(payload.user);
      UserStore.__emitChange();
      break;
    case DispatchConstants.LOGGED_OUT:
      console.log("Logged out");
      UserStore.logout();
      UserStore.__emitChange();
      break;
  }
};

window.UserStore = UserStore;

module.exports = UserStore
