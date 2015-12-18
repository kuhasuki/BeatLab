var React = require('react');
var Button = require('react-bootstrap/lib/Button');
var Alert = require('react-bootstrap/lib/Alert');

var AlertStore = require('./stores/alert_store.js');


var Notices = React.createClass({
  getInitialState() {
    return {
      alert: { visible: false, alertType : '', body : '' , timeout = null;
    };
  },

  componentDidMount() {
      this.listenerToken = AlertStore.addListener(this._incomingAlert);  
  },

  _incomingAlert() {
      this.setState({
        alert: 
      })
  }

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle="info" onDismiss={this.handleAlertDismiss} dismissAfter={2000}>
          <h4>Oh snap! You got an error!</h4>
          <p>But this will hide after 2 seconds.</p>
        </Alert>
      );
    }

    return (
      <Button onClick={this.handleAlertShow}>Show Alert</Button>
    );
  },

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },

  handleAlertShow() {
    this.setState({alertVisible: true});
  }
});




module.exports = Notices;