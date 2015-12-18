var React = require('react');

var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var Button = require('react-bootstrap/lib/Button');

var CallToAction = React.createClass({
  render: function(){
    return(
       <Jumbotron>
		    <h1>Hello, world!</h1>
		    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
		    <p><Button bsStyle="primary">Learn more</Button></p>
  		</Jumbotron>
    );
  }
});



module.exports = CallToAction;