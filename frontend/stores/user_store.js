var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var UserStore = new Store(Dispatcher);

var DispatchConstants = require('../constants/dispatch_constants.js');

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

UserStore.updateError = function(error){
  console.log(error);
  _error = error;
};

UserStore.getError = function(){
  return _error;
};

UserStore.login = function(){
  _loggedIn = true;
};


UserStore.loginStatus = function(){
  return _loggedIn;
};

UserStore.__onDispatch = function (payload) {
  _error = "";
  switch (payload.actionType) {
    case DispatchConstants.LOGIN_SUCCESS:
      console.log("Logged in successfully");
      UserStore.login();
      UserStore.__emitChange();
      break;
    case DispatchConstants.LOGIN_FAILURE:
      console.log("failed to log in");
      UserStore.updateError(payload.error);
      UserStore.__emitChange();
      break;
    case DispatchConstants.REGISTRATION_SUCCESS:
      console.log("Registered and Logged in successfully");
      UserStore.login();
      UserStore.__emitChange();
      break;
    case DispatchConstants.REGISTRATION_FAILURE:
      console.log("failed to register and log in");
      UserStore.updateError(payload.error);
      UserStore.__emitChange();
      break;
  }
};

window.UserStore = UserStore;

module.exports = UserStore
