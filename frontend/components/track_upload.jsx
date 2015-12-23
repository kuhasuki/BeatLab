var React = require('react');

var LinkedStateMixin = require('react-addons-linked-state-mixin');
var FileInput = require('react-file-input');

var Api = require('../util/api.js');

var Input = require('react-bootstrap/lib/Input');

var ButtonInput = require('react-bootstrap/lib/ButtonInput');

var TrackStore = require('../stores/track_store.js');

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
      this.uploadInProgress = false;
      this.submitText = "Upload";
      this.listenerToken = TrackStore.addListener(this._trackChanged)
      this.forceUpdate(); 
    },

    _trackChanged() {
        console.log("trackstore changed");
        this.uploadInProgress = false;
        this.submitText = "Upload";
        this.forceUpdate();
    },

    handleSubmit(e){
    	e.preventDefault;
        this.uploadInProgress = true;
        this.submitText = "Uploading...";
        this.forceUpdate();
    	this.formData.append('track', JSON.stringify(this.state));
    	// this.formData.append('genre', this.state.genre);
    	// this.formData.append('description', this.state.description);
    	console.log(this.formData);
    	Api.upload(this.formData);
    },

    sayFile(e){
        e.preventDefault;
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
	        	<ButtonInput type="reset" value="Reset Button" />
	        	<ButtonInput value={this.submitText} disabled={this.uploadInProgress} onClick={this.handleSubmit}/>
                {this.uploadInProgress ? <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg> : <div></div> }
        	</form>
        );
    }
});

module.exports = TrackUpload;