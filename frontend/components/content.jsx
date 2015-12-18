var ReactDOM = require('react-dom');
var React = require('react');

var Notices = require('./notices.jsx');



var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

var divStyle = {
	padding : '5px',
	backgroundColor: '#00CCFF',
	border: 'solid 1px black'
};

var Content = React.createClass({
  render: function(){
  	console.log(this.props.children);
    return(
		  <Grid>
		    <Row className="show-grid">
		      <Col style={divStyle}><Notices /></Col>
		    </Row>

		    <Row className="show-grid">
		    	<Col style={divStyle}>{this.props.children}</Col>
		    	<Col ></Col>
		      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
		      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
		      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
		    </Row>

		    <Row className="show-grid">
		      <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
		    </Row>

		    <Row className="show-grid">
		      <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
		      <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
		    </Row>
		  </Grid>
    );
  }
});

module.exports = Content;
