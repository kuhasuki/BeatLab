var Dispatcher = require('../dispatcher/dispatcher.js');
var DispatchConstants = require('../constants/dispatch_constants.js');

var ApiActions = {
  loginAttempt: function(data){
    console.log(data);
    if(data.hasOwnProperty("error")){
      Dispatcher.dispatch({
        actionType: DispatchConstants.LOGIN_FAILURE,
        error: data.error
      });

    } else {
      console.log("isnt error");
      Dispatcher.dispatch({
        actionType: DispatchConstants.LOGIN_SUCCESS,
        user: data
      });

    }
  },
  registerAttempt: function(data){
    console.log(data);
    if(data.hasOwnProperty("error")){
      Dispatcher.dispatch({
        actionType: DispatchConstants.REGISTRATION_FAILURE,
        error: data.error
      });

    } else {
      console.log("isnt error");
      Dispatcher.dispatch({
        actionType: DispatchConstants.REGISTRATION_SUCCESS,
        user: data
      });

    }
  }
};

module.exports = ApiActions;
