var React = require('react');

var Input = require('react-bootstrap/lib/Input');
var ButtonInput = require('react-bootstrap/lib/ButtonInput');

var TrackUpload = React.createClass({
    displayName: 'TrackUpload',
    render() {
        return (
        	<form>
	        	<Input type="text" label="Title" />
	        	<Input type="file" className="btn" label="File"/>

	        	<Input type="select" label="Genre" placeholder="select">
	          <option value="Polka">Polka</option>
	        	<option value="Turbo Folk">Turbo Folk</option>
	        	</Input>
	        	<Input type="textarea" label="Description" placeholder="" />
	        	<ButtonInput value="Button Input" />
	        	<ButtonInput type="reset" value="Reset Button" />
	        	<ButtonInput type="submit" value="Submit Button" />
        	</form>
        );
    }
});

module.exports = TrackUpload;