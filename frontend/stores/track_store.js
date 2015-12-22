var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var TrackStore = new Store(Dispatcher);

var DispatchConstants = require('../constants/dispatch_constants.js');

var AlertActions = require('../actions/alert_actions.js');


var _tracks = [];
var _errors = [];

TrackStore.getAllTracks = function(){

};

TrackStore.getTrackById = function(id){

};

TrackStore.setTracks = function(id){

};

TrackStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case DispatchConstants.UPLOAD_SUCCESS:
      console.log("success dispatch upload");
      TrackStore.__emitChange();
      break;
    case DispatchConstants.UPLOAD_FAILURE:
      console.log("failed to upload");
      TrackStore.__emitChange();
      break;
    case DispatchConstants.FETCH_TRACKS:
      console.log("tracks acquired");
      TrackStore.__emitChange();
      break;
  }
};

window.TrackStore = TrackStore;

module.exports = TrackStore
