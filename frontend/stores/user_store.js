var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var _benches = [];
var _error = '';
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
UserStore.updateError = function(error){
  console.log(error);
  _error = error;
};

UserStore.getError = function(){
  return _error;
};

UserStore.__onDispatch = function (payload) {
  console.log("hit dispatch");
  switch (payload.actionType) {
    case DispatchConstants.LOGIN_SUCCESS:
      console.log("Logged in successfully");
      UserStore.__emitChange();
      break;
    case DispatchConstants.LOGIN_FAILURE:
      console.log("failed to log in");
      UserStore.updateError(payload.error);
      UserStore.__emitChange();
      break;
  }
};

window.UserStore = UserStore;

module.exports = UserStore
