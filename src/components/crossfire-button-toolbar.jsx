define(function (require, exports, module) {

  var {React} = require('module!../../../libReact/src/main'),
    {ButtonToolbar, Button, Glyphicon} = require('module!../../../libReactBootstrap/src/main');

  module.exports = React.createClass({


    propTypes: {
      setOrderClassFunc: React.PropTypes.func.isRequired,
      onSaveFunc: React.PropTypes.func.isRequired,
      forwardedPhonesNum: React.PropTypes.string
    },
    changeListDisplayClass(value){
      var className = value ? 'displayColumn' : 'displayRow';

      this.props.setOrderClassFunc(className);
      this.setState(this.state);

    },
    onSaveHandler() {
      this.props.onSaveFunc();
    },

    render(){
      return <div className="Bootstrap btnToolBar">
        <h6 className="Bootstrap maxPhonesHint">You have already Forwarded {this.props.forwardedPhonesNum} phones, You
          can also forwarding {10 - this.props.forwardedPhonesNum} phones</h6>
        <ButtonToolbar>
          <Button bsSize='small' onClick={this.changeListDisplayClass.bind(this, true)}>Sequentially</Button>
          <Button bsSize='small' onClick={this.changeListDisplayClass.bind(this, false)}>Simultaneously</Button>
        </ButtonToolbar>
        <ButtonToolbar className="Bootstrap actionBtnGroup">
          <Button bsSize='small' bsStyle='primary' onClick={this.props.addOtherPhone}>
            <Glyphicon glyph="plus"/> Add Phone
          </Button>
          <Button bsSize='small' bsStyle='success' onClick={this.onSaveHandler}>
            <Glyphicon glyph="ok-circle"/> Save
          </Button>
          <Button bsSize='small' bsStyle='danger'>
            <Glyphicon glyph="remove-circle"/> Clean
          </Button>
        </ButtonToolbar>
      </div>
    }
  });

});
