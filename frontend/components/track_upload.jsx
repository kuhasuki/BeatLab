var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Api = require('../util/api.js');
var TrackStore = require('../stores/track_store.js');

var Input = require('react-bootstrap/lib/Input');
var ButtonInput = require('react-bootstrap/lib/ButtonInput');
var Col = require('react-bootstrap/lib/Col');

var TrackUpload = React.createClass({
	mixins: [LinkedStateMixin],
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
        if(TrackStore.uploadReady()){
            var track = TrackStore.getUploadedTrack();
            this.listenerToken.remove();
            window.location.href = "#/track/" + track.id;
        } else {
            this.uploadInProgress = false;
            this.submitText = "Upload";
            this.forceUpdate();
        }
    },

    handleSubmit(e){
    	e.preventDefault;

        this.uploadInProgress = true;
        this.submitText = "Uploading...";

        this.forceUpdate();

    	this.formData.append('track', JSON.stringify(this.state));
    	Api.upload(this.formData);
    },

    sayFile(e){
        e.preventDefault;
    	var file = e.target.files[0];
    	this.formData.append('file', file, file.name);
    	this.setState({file : file});
    },

    render() {
        return (
        <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
        	<form>
                <Input type="text" label="Title" valueLink={this.linkState('title')} labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                <Input type="file" accept=".mp3" className="btn" style={{"marginBottom" : "10px"}} label="File" onChange={this.sayFile} labelClassName="col-xs-2" wrapperClassName="col-xs-10"/>
	        	

	        	<Input type="select" label="Genre" placeholder="select" valueLink={this.linkState('genre')}  labelClassName="col-xs-2" wrapperClassName="col-xs-10">
                    <option value="Polka">Polka</option>
                    <option value="Turbo Folk">Turbo Folk</option>
	        	</Input>

	        	<Input type="textarea" label="Description" placeholder="" valueLink={this.linkState('description')} labelClassName="col-xs-2" wrapperClassName="col-xs-10"/>
        	<ButtonInput type="reset" value="Reset" style={{"marginBottom" : "10px"}} wrapperClassName="col-xs-offset-2 col-xs-10" />
	        	<ButtonInput value={this.submitText} disabled={this.uploadInProgress} onClick={this.handleSubmit} wrapperClassName="col-xs-offset-2 col-xs-2"/>
                {this.uploadInProgress ? <div style={{"marginTop" : "-40px"}} className="col-xs-4"><svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg></div> : <div></div> }
        	</form>
        </Col>
        );
    }
});

module.exports = TrackUpload;