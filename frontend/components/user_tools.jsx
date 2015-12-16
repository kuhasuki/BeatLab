var ReactDOM = require('react-dom');
var React = require('react');

var UserTools = React.createClass({
  render: function(){
    return(
      <ul className="nav navbar-nav navbar-right">
        <li><a rel="nofollow" data-method="delete" href="/sessions">Logout</a></li>
      </ul>
    );
  }
});

module.exports = UserTools;
