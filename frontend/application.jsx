var ReactDOM = require('react-dom');
var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var Button = require('react-bootstrap/lib/Button');

var Navigation = require('./components/nav.jsx');
var Content = require('./components/content.jsx');
var Player = require('./components/player.jsx');
var Profile = require('./components/profile.jsx');
var Test = require('./components/test.jsx');
var Landing = require('./components/landing.jsx');

var UserStore = require('./stores/user_store.js');
var Api = require('./util/api.js');

var TrackWave = React.createClass({
  componentDidMount() {
      Api.verifySession();  
  },
  render: function(){
    return(
      <div>
        <Navigation />
        {this.props.children}
        <Player />
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
    <Route component={TrackWave} >
      <Route component={Content}>
        <Route path="/" component={Landing} />
        <Route path="you" component={Test} />
        <Route path="profile" component={Test} />
        <Route path="tracks" components={{c1: Test, c2: Test}} />
      </Route>
    </Route>
  </Router>, root);
});
