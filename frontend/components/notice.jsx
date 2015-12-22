var React = require('react');
var Button = require('react-bootstrap/lib/Button');
var Alert = require('react-bootstrap/lib/Alert');

var AlertStore = require('../stores/alert_store.js');


var Notice = React.createClass({
  getInitialState() {
    return {
      alert: { type : '', body : '' , timeout: ''}, alertVisible: false,
    };
  },

  componentDidMount() {
      this.listenerToken = AlertStore.addListener(this._incomingAlert);  
  },

  _incomingAlert() {
      this.setState({
        alert: AlertStore.getAlert(), alertVisible: AlertStore.newAlert()
      })
  },

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle={this.state.alert.type} onDismiss={this.handleAlertDismiss} dismissAfter={this.state.alert.timeout}>
          <p>{this.state.alert.body}</p>
        </Alert>
      );
    }

    return (<div></div>
    );
  },

  handleAlertDismiss: function () {
    this.setState({alertVisible: false});
    AlertStore.clearAlert();
  },

  handleAlertShow: function () {
    this.setState({alertVisible: true});
  }
});




module.exports = Notice;