var Dispatcher = require('../dispatcher/dispatcher.js');
var DispatchConstants = require('../constants/dispatch_constants.js');

var AlertActions = {

  success: function(body, timeout){
    Dispatcher.dispatch({
      actionType: DispatchConstants.ALERT_SUCCESS,
      body: body,
      timeout: timeout
    });
    console.log('dispatching sussess');
  },

  info: function(body, timeout){
    Dispatcher.dispatch({
      actionType: DispatchConstants.ALERT_INFO,
      body: body,
      timeout: timeout
    });
  },

  warning: function(body, timeout){
    Dispatcher.dispatch({
      actionType: DispatchConstants.ALERT_WARNING,
      body: body,
      timeout: timeout
    });
  },

  danger: function(body, timeout){
    Dispatcher.dispatch({
      actionType: DispatchConstants.ALERT_DANGER,
      body: body,
      timeout: timeout
    });
  }
};

window.AlertActions = AlertActions;

module.exports = AlertActions;
