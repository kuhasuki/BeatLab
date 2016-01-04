var React = require('react');

var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var Button = require('react-bootstrap/lib/Button');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

var SearchBar = require('./search_bar.jsx');

var CallToAction = React.createClass({
  render: function(){
    return(
    	<Row >
       	<Jumbotron className="landing-graphic" >
       		<Col xs={12}>
		    		<h2 className="welcome-header">Turn it up</h2>
		    		<p >Discover incredible music. Control the mix. </p>
		    		<p >Find your perfect soundscape</p>
		    	</Col>

		    	<Col xs={4} xsOffset={2} smOffset={2} mdOffset={3} lgOffset={3}>
						<SearchBar  />
					</Col>
		    	<Col xs={4} className="text-left">
		    			or&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		    			<button className="outline-button mdl-button mdl-js-button mdl-js-ripple-effect">Upload</button>
	    		</Col>
				</Jumbotron>
  		</Row>
    );
  }
});



module.exports = CallToAction;