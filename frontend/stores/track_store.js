var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var TrackStore = new Store(Dispatcher);

var DispatchConstants = require('../constants/dispatch_constants.js');

var AlertActions = require('../actions/alert_actions.js');


var _track;

var _tracks = [];
var _errors = [];

TrackStore.getAllTracks = function(){

};

TrackStore.getTrackById = function(id){

};

TrackStore.getUploadedTrack = function(){
  return _track;
};

TrackStore.setTrack = function(track){
  _track = track;
};

TrackStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case DispatchConstants.UPLOAD_SUCCESS:
      console.log("success dispatch upload");
      console.log(payload.track);
      TrackStore.setTrack(payload.track);
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
