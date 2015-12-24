var React = require('react');
var CallToAction = require('./call_to_action.jsx');

var Col = require('react-bootstrap/lib/Col');

var Landing = React.createClass({
  render: function(){
    return(
    	<Col>
      	<CallToAction />
      </Col>
    );
  }
});



module.exports = Landing;