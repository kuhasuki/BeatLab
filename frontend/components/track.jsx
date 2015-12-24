var ReactDOM = require('react-dom');
var React = require('react');

var TrackStore = require('../stores/track_store.js');

var Api = require('../util/api.js');

var Track = React.createClass({
	getInitialState() {
	    return {
	        track: {}  
	    };
	},

	componentDidMount() {
		Api.fetchTracks();
	  this.listenerToken = TrackStore.addListener(this._getTrack);    
	},

	componentWillUnmount() {
	    this.listenerToken.remove();  
	},

	_getTrack(){
		this.setState({
			track: TrackStore.getTrackById(this.props.params.id)
		})
	},

  render: function(){
    return(
      <div>
      	<audio src={this.state.track.src} preload="auto" controls="true">
				</audio>
      </div>
    );
  }
});

module.exports = Track;
