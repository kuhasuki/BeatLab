var React = require('react');

var LinkedStateMixin = require('react-addons-linked-state-mixin');
var FileInput = require('react-file-input');

var Api = require('../util/api.js');

var Input = require('react-bootstrap/lib/Input');

var ButtonInput = require('react-bootstrap/lib/ButtonInput');

var TrackUpload = React.createClass({
		mixins: [LinkedStateMixin],
    displayName: 'TrackUpload',
    getInitialState() {
        return {
            title: '', file : null, genre: '', description: ''
        };
    },
    componentDidMount() {
      this.formData = new FormData();  
    },
    handleSubmit(e){
    	e.preventDefault;

    	this.formData.append('track', JSON.stringify(this.state));
    	// this.formData.append('genre', this.state.genre);
    	// this.formData.append('description', this.state.description);
    	console.log(this.formData);
    	Api.upload(this.formData);
    },

    sayFile(e){
    	var file = e.target.files[0];
    	this.formData.append('file', file, file.name);
    	this.setState({file : file});


    	// var business;
    	// console.log(e);
    	// if (e.target.files && e.target.files[0]) {
	    //   fileReader = new FileReader();
	    //   fileReader.onload = function (event) {
	    //    	business = event.target.result;
	    //    	console.log(business);
	    //   }
	    //   fileReader.readAsDataURL(e.target.files[0]);
	    // }
	    // console.log(business);
	    // console.log(this.refs);
    },

    render() {
        return (
        	<form>
	        	<Input type="text" label="Title" valueLink={this.linkState('title')} />
	        	<Input type="file" accept=".mp3" className="btn" label="File" onChange={this.sayFile} />

	        	<Input type="select" label="Genre" placeholder="select" valueLink={this.linkState('genre')}>
	          <option value="Polka">Polka</option>
	        	<option value="Turbo Folk">Turbo Folk</option>
	        	</Input>
	        	<Input type="textarea" label="Description" placeholder="" valueLink={this.linkState('description')}/>
	        	<ButtonInput value="Button Input" />
	        	<ButtonInput type="reset" value="Reset Button" />
	        	<ButtonInput ref="myDick" type="submit" value="Submit Button" onClick={this.handleSubmit}/>
        	</form>
        );
    }
});

module.exports = TrackUpload;