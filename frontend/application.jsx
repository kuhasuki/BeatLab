var ReactDOM = require('react-dom');
var React = require('react');

var Navigation = require('./components/nav.jsx');
var Content = require('./components/content.jsx');
var Player = require('./components/player.jsx');

var TrackWave = React.createClass({
  render: function(){
    return(
      <div>
        <Navigation />
        <Content />
        <Player />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var application = document.querySelector('#trackwave');
  console.log(application);
  ReactDOM.render( <TrackWave />, application);
});
