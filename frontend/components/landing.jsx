var React = require('react');
var CallToAction = require('./call_to_action.jsx');

var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');

var Landing = React.createClass({
  render: function(){
    return(
    	<Col className="mdl-card mdl-shadow--4dp">
      	<CallToAction className="landing-graphic" />
      	<Row>
      		<Col xs={12} className="text-center" >
      			<h4>Trending now:</h4>
      		</Col>
      	</Row>
      </Col>
    );
  }
});



module.exports = Landing;