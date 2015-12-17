'use strict';
var ReactDOM = require('react-dom');
var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Api = require('../util/api.js');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var Input = require('react-bootstrap/lib/Input');
var Alert = require('react-bootstrap/lib/Alert');

var UserTools = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
      return({name: '', password: '', errors: ''});
  },

  componentDidMount: function(){
    this.showModalLogin = false;
    this.showModalRegister = false;
  },

 closeModalL: function() {
     this.showModalLogin = false;
     this.forceUpdate();
 },

  openModalL: function(e){
      this.showModalLogin = true;
      this.forceUpdate();
  },

  closeModalR: function() {
      this.showModalRegister = false;
      this.forceUpdate();
  },

   openModalR: function(e){
       this.showModalRegister = true;
       this.forceUpdate();
   },

  login: function(){
    Api.login(this.state.name, this.state.password);
  },

  render: function(){
    return(
      <ul className="nav navbar-nav navbar-right">
      <li>
        <a href="javascript:void(0)" onClick={this.openModalL} >Login</a>
        <Modal show={this.showModalLogin} onHide={this.closeModalL} >
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.errors.length >= 1 ? <Alert bsStyle="danger">{this.state.errors}</Alert> : "" }
            <label>Username
              <Input type="text" valueLink={this.linkState('name')}/>
            </label>
            <br></br>
            <label>Password
              <Input type="password" valueLink={this.linkState('password')} />
            </label>
            <br></br>
            <Button onClick={this.login}>Submit</Button>
          </Modal.Body>
        </Modal>
      </li>
      <li>
        <a href="javascript:void(0)" onClick={this.openModalR} >Register</a>
        <Modal show={this.showModalRegister} onHide={this.closeModalR} >
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.errors.length >= 1 ? <Alert bsStyle="danger">{this.state.errors}</Alert> : "" }
            <label>Username
              <Input type="text" valueLink={this.linkState('name')} />
            </label>
            <br></br>
            <label>Password
              <Input type="password" valueLink={this.linkState('password')} />
            </label>
            <br></br>
            <Button onClick={this.register}>Submit</Button>
          </Modal.Body>
        </Modal>
      </li>
    </ul>

    );
  }
});



module.exports = UserTools;
