var ReactDOM = require('react-dom');
var React = require('react');

var UserTools = require('./user_tools.jsx');

var Navigation = React.createClass({
  render: function(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
  	        <span className="icon-bar"></span>
  	        <span className="icon-bar"></span>
  	        <span className="icon-bar"></span>
  	      </button>
        <a className="navbar-brand" href="#">TrackWave</a>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav ">
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
          <UserTools />
        </div>
      </div>
    </nav>
    );
  }
});

module.exports = Navigation;
