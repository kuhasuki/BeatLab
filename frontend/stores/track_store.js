var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var TrackStore = new Store(Dispatcher);

var DispatchConstants = require('../constants/dispatch_constants.js');

var AlertActions = require('../actions/alert_actions.js');


var _track;

var _uploaded = false;
var _tracks = [];
var _errors = [];
var _empty = true;

TrackStore.getAllTracks = function(){

};

TrackStore.getTrackById = function(id){
  if(_track && _track.id == id){
    return _track;
  }

  // console.log(_tracks.length);
  for(i=0;i < _tracks.length; i++){
    // console.log(i);
    if(_tracks[i].id == id){

      return _tracks[i];
    } 
    
  }
  return null;
};

TrackStore.populate = function(tracks){
  _empty = false;
  _tracks = tracks;
};

TrackStore.getUploadedTrack = function(){
  return _track;
};

TrackStore.uploadReady = function(){
  return _uploaded;
};

TrackStore.setTrack = function(track){
  console.log(track);
   console.log(track.track);
  _track = JSON.parse(track).track;
  _uploaded = true;
};

TrackStore.empty = function(){
  return _empty;
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
      TrackStore.populate(payload.tracks);
      TrackStore.__emitChange();
      break;
  }
};

window.TrackStore = TrackStore;

module.exports = TrackStore
