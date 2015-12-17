'use strict';
var ReactDOM = require('react-dom');
var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var Input = require('react-bootstrap/lib/Input');
var Alert = require('react-bootstrap/lib/Alert');

var Api = require('../util/api.js');

var UserStore = require('../stores/user_store.js');

var Login = require('./login.jsx');
var Register = require('./register.jsx');

var UserTools = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState() {
      return {
          "loggedIn" : false
      };
  },
  componentDidMount() {
      UserStore.addListener(this._loginStatus);
  },

  _loginStatus() {
    this.setState({"loggedIn": UserStore.loginStatus()});
  },
  render: function(){
    if(this.state.loggedIn) {
      return(
        <ul className="nav navbar-nav navbar-right">
        <ProfileOptions />
        <Logout />
      </ul>

      );
    } else {
      return(
        <ul className="nav navbar-nav navbar-right">
          <Login />
          <Register />
      </ul>

      );
    }
  }
});



module.exports = UserTools;
