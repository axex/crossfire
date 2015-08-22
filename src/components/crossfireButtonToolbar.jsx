define(function(require, exports, module){

  var {React} = require('module!../../../libReact/src/main'),
      {ButtonToolbar, Button} = require('module!../../../libReactBootstrap/src/main');

  module.exports = React.createClass({


    propTypes: {
      setOrderClassFunc: React.PropTypes.func.isRequired
    },
    changeListDisplayClass(value){
      var className = value ? 'displayColumn' : 'displayRow';

      this.props.setOrderClassFunc(className);
      this.setState(this.state);

    },

    render(){
      return <div className="Bootstrap btnToolBar">
        <ButtonToolbar>
          <Button bsSize='small'>Save</Button>
          <Button bsSize='small'>Clean</Button>
          <Button bsSize='small' onClick={this.changeListDisplayClass.bind(this, true)}>Sequentially</Button>
          <Button bsSize='small' onClick={this.changeListDisplayClass.bind(this, false)}>Simultaneously</Button>
        </ButtonToolbar>
      </div>

    }

  });

});