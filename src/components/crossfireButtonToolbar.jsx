define(function (require, exports, module) {

  var {React} = require('module!../../../libReact/src/main'),
    {ButtonToolbar, Button} = require('module!../../../libReactBootstrap/src/main');

  module.exports = React.createClass({


    propTypes: {
      setOrderClassFunc: React.PropTypes.func.isRequired,
      forwardedPhonesNum: React.PropTypes.string
    },
    changeListDisplayClass(value){
      var className = value ? 'displayColumn' : 'displayRow';

      this.props.setOrderClassFunc(className);
      this.setState(this.state);

    },

    render(){
      return <div className="Bootstrap btnToolBar">
        <h6 className="Bootstrap maxPhonesHint">You have already Forwarded {this.props.forwardedPhonesNum} phones, You can also forwarding  {10 - this.props.forwardedPhonesNum} phones</h6>
        <ButtonToolbar>
          <Button bsSize='small' bsStyle='primary' onClick={this.changeListDisplayClass.bind(this, true)}>Sequentially</Button>
          <Button bsSize='small' bsStyle='primary' onClick={this.changeListDisplayClass.bind(this, false)}>Simultaneously</Button>
        </ButtonToolbar>
        <ButtonToolbar className="Bootstrap actionBtnGroup">
          <Button bsSize='small' bsStyle='info'>Add Phone</Button>
          <Button bsSize='small' bsStyle='info'>Save</Button>
          <Button bsSize='small' bsStyle='info'>Clean</Button>
        </ButtonToolbar>
      </div>
    }
  });

});
