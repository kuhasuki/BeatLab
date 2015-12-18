var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var AlertStore = new Store(Dispatcher);

var DispatchConstants = require('../constants/dispatch_constants.js');

var _alert = '';
var _body = '';
var _timeout = null;
var _type = '';

AlertStore.update = function(payload){
  _alert = 
};

AlertStore.__onDispatch = function (payload) {
  _alert = "";
  switch (payload.actionType) {
    case DispatchConstants.ALERT_SUCCESS:
      console.log("hit disp");
      AlertStore.update(payload);
      AlertStore.__emitChange();
      break;
    case DispatchConstants.ALERT_INFO:
      AlertStore.update(payload);
      AlertStore.__emitChange();
      break;
    case DispatchConstants.ALERT_WARNING:
      AlertStore.update(payload);
      AlertStore.__emitChange();
      break;
    case DispatchConstants.ALERT_DANGER:
      AlertStore.update(payload);
      AlertStore.__emitChange();
      break;
    default:
      console.log("alertstore defaulted");
      break;
  }
};

window.AlertStore = AlertStore;

module.exports = AlertStore
