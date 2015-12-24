var ReactDOM = require('react-dom');
var React = require('react');

var UserTools = require('./user_tools.jsx');

var UserStore = require('../stores/user_store.js');

var AlertActions = require('../actions/alert_actions.js');


var Navigation = React.createClass({
  clearAlerts(){
    //preferrably handle onClick for each nav anchor but this'll do for now, won't warn users to sign in
    console.log("nav changed");
    AlertActions.clear()
  },

  render: function(){
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation" >
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
  	        <span className="icon-bar"></span>
  	        <span className="icon-bar"></span>
  	        <span className="icon-bar"></span>
  	      </button>
        <a className="navbar-brand" href="#" onClick={this.clearAlerts} >Brand</a>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav ">
            <li><a href="#/" onClick={this.clearAlerts}>Home</a></li>
            <li><a href="#/" onClick={this.clearAlerts}>About Us</a></li>
            <li><a href="#/" onClick={this.clearAlerts}>Contact</a></li>
          </ul>
            <UserTools />
        </div>
      </div>
    </nav>
    );
  }
});

module.exports = Navigation;
