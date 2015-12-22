var Dispatcher = require('../dispatcher/dispatcher.js');
var DispatchConstants = require('../constants/dispatch_constants.js');

var ApiActions = {

  loginAttempt: function(data){
    if(data.hasOwnProperty("error")){
      Dispatcher.dispatch({
        actionType: DispatchConstants.LOGIN_FAILURE,
        error: data.error
      });

    } else {
      console.log("data is");
      console.log(data);
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
  },

  checkSession: function(data){
    console.log(data);
    if(data.hasOwnProperty("status")){
      Dispatcher.dispatch({
        actionType: DispatchConstants.LOGGED_OUT,
        error: data.error
      });

    } else {
      console.log("is logged in");
      Dispatcher.dispatch({
        actionType: DispatchConstants.LOGGED_IN,
        user: data
      });
    }
  },

  uploadSuccess: function(data){
    console.log(data);
    Dispatcher.dispatch({
      actionType: DispatchConstants.UPLOAD_SUCCESS,
      track: data
    }); 
  },

  uploadFailure: function(data){
    console.log(data);
    Dispatcher.dispatch({
      actionType: DispatchConstants.UPLOAD_FAILURE,
      errors: data.errors
    }); 
  },

  fetchTracks: function(data){
    console.log(data);
    Dispatcher.dispatch({
      actionType: DispatchConstants.FETCH_TRACKS,
      tracks: data
    }); 
  }
};

module.exports = ApiActions;
