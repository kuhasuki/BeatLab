var ReactDOM = require('react-dom');
var React = require('react');

var TrackStore = require('../stores/track_store.js');

var Api = require('../util/api.js');

var Track = React.createClass({
	getInitialState() {
	    return {
	        track: "WHAHAHA"  
	    };
	},

	componentDidMount() {
			// if(TrackStore.empty()){
				Api.fetchTracks();
			// }
	    this.listenerToken = TrackStore.addListener(this._getTrack); 
	    
	},

	componentWillUnmount() {
	    this.listenerToken.remove();  
	},

	_getTrack(){
		console.log("callback triggered");
		console.log(TrackStore.getTrackById(this.props.params.id));
		this.setState({
			track: TrackStore.getTrackById(this.props.params.id)
		})
	},

  render: function(){
  	console.log(this.props.params);

  	console.log(this.state.track);
    return(
      <div>
      	<audio src={this.state.track.src} preload="auto" controls="true">
				</audio>
      </div>
    );
  }
});

module.exports = Track;
