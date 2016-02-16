var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Api = require('../util/api.js');
var CommentStore = require('../stores/comment_store.jsx');
var UserStore = require('../stores/user_store.js');

var Input = require('react-bootstrap/lib/Input');
var ButtonInput = require('react-bootstrap/lib/ButtonInput');
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');

var CommentForm = React.createClass({
	mixins: [LinkedStateMixin],
    getInitialState() {
        return {
            body: ''
        };
    },

    componentDidMount() {
      this.formData = new FormData();
      this.uploadInProgress = false;
      this.submitText = "Submit";
      console.log(UserStore.isLoggedIn());
      if (!UserStore.isLoggedIn()){
        this.submitText = "Please Sign in to leave a comment"
      };
      this.listenerToken = CommentStore.addListener(this._commentsChanged)
    },

    componentWillUpdate(nextProps, nextState) {
        Api.fetchComments(this.props.track_id);  
    },

    _commentsChanged() {
        this.uploadInProgress = false;
        this.submitText = "Submit";
        if (!UserStore.isLoggedIn()){
            this.submitText = "Please Sign in to leave a comment"
        };
    },

    handleSubmit(e){
    	e.preventDefault;
        
    
    	Api.submitComment(this.state.body, this.props.track_id);
        Api.fetchComments(this.props.track_id);
        this.setState({body : ''});
    },

    // sayFile(e){
    //     e.preventDefault;
    // 	var file = e.target.files[0];
    // 	this.formData.append('file', file, file.name);
    // 	this.setState({file : file});
    // },

    render() {
        return (
        <Col xs={12} className="card-space">
            <Row>
            <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
                <h4> Leave a Comment</h4>
        	    <form>
	        	<Input type="textarea" label="Comment" placeholder="" valueLink={this.linkState('body')} labelClassName="col-xs-2" wrapperClassName="col-xs-10"/>
	        	<ButtonInput value={this.submitText} disabled={this.uploadInProgress} onClick={this.handleSubmit} wrapperClassName="col-xs-offset-2 col-xs-2"/>
                {this.uploadInProgress ? <div className="mdl-spinner mdl-js-spinner is-active"></div> : <div></div> }
        	</form>
            </Col>
        </Row>
        </Col>

        );
    }
});

module.exports = CommentForm;