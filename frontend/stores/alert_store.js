var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var AlertStore = new Store(Dispatcher);

var DispatchConstants = require('../constants/dispatch_constants.js');

var _alert = '';
var _body = '';
var _timeout = null;
var _type = '';
 
AlertStore.update = function(payload, type) {
  _body = payload.body;
  _timeout = payload.timeout;
  _type = type;
};

AlertStore.newAlert = function() {
  if(typeof _timeout == null){
    return false;
  } else {
    return true;
  }
};

AlertStore.getAlert = function() {
  return { type: _type, body: _body, timeout: _timeout };
};

AlertStore.clearAlert = function(){
  var _body = '';
  var _timeout = null;
  var _type = '';
};

AlertStore.__onDispatch = function (payload) {
  _alert = "";
  switch (payload.actionType) {
    case DispatchConstants.ALERT_SUCCESS:
      console.log("hit disp");
      AlertStore.update(payload, "success");
      AlertStore.__emitChange();
      break;
    case DispatchConstants.ALERT_INFO:
      AlertStore.update(payload, "info");
      AlertStore.__emitChange();
      break;
    case DispatchConstants.ALERT_WARNING:
      AlertStore.update(payload, "warning");
      AlertStore.__emitChange();
      break;
    case DispatchConstants.ALERT_DANGER:
      AlertStore.update(payload, "danger");
      AlertStore.__emitChange();
      break;
  }
};

window.AlertStore = AlertStore;

module.exports = AlertStore
