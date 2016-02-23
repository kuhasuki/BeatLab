var ReactDOM = require('react-dom');
var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
// var History = require('react-router').History;

var Button = require('react-bootstrap/lib/Button');

var Navigation = require('./components/nav.jsx');
var Content = require('./components/content.jsx');
var Player = require('./components/player.jsx');
var Profile = require('./components/profile.jsx');
var Test = require('./components/test.jsx');
var Landing = require('./components/landing.jsx');
var TrackUpload = require('./components/track_upload.jsx');
var ImageUpload = require('./components/image_upload.jsx');
var Track = require('./components/track.jsx');
var MyTracks = require('./components/my_tracks.jsx');
var Explore = require('./components/explore.jsx');

var UserStore = require('./stores/user_store.js');
var AlertStore = require('./stores/alert_store.js');
var Api = require('./util/api.js');

var AlertActions = require('./actions/alert_actions.js');
var Dispatcher = require('./dispatcher/dispatcher.js');

var TrackWave = React.createClass({
  componentWillMount() {
      Api.verifySession();  
  },
  render: function(){
    return(
      <div>
        <Navigation />
        {this.props.children}
        <br></br>
        <br></br>
        <Player />
      </div>
    );
  }
});

function requireAuth(nextState, replaceState ){
  Api.verifySession();
  if(!UserStore.isLoggedIn()){
    replaceState({ nextPathname: nextState.location.pathname }, '/')
    AlertActions.danger("You must be logged in to do that", 2000);  
  } 
}

document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector('#trackwave');
  ReactDOM.render(
  <Router>
    <Route component={TrackWave} >
      <Route component={Content}>
        <Route path="/" component={Landing} />
        <Route path="/:user_id/tracks" component={MyTracks} />
        <Route path="explore" component={Explore} />
        <Route path="track/:id" component={Track} />
        <Route path="upload" component={TrackUpload} onEnter={requireAuth} />
        <Route path="artist" component={ImageUpload} onEnter={requireAuth} />
        
      </Route>
    </Route>
  </Router>, root);
});
