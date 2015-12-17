var ReactDOM = require('react-dom');
var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var Button = require('react-bootstrap/lib/Button');

var Navigation = require('./components/nav.jsx');
var Content = require('./components/content.jsx');
var Player = require('./components/player.jsx');

var UserStore = require('./stores/user_store.js');

var TrackWave = React.createClass({
  render: function(){
    return(
      <div>
        <Navigation />
        <Content />
        <Player />
        <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   var application = document.querySelector('#trackwave');
//   console.log(application);
//   ReactDOM.render( <TrackWave />, application);
// });

document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector('#trackwave');
  ReactDOM.render(
  <Router>
    <Route path="/" component={TrackWave} >
      <Route path="content" component={Content} >
      </Route>
    </Route>
  </Router>, root);
});
