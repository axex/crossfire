define(function(require, exports, module){

  var {React} = require('module!../../../libReact/src/main'),
      {ButtonToolbar, Button} = require('module!../../../libReactBootstrap/src/main');

  module.exports = React.createClass({


    render(){
      return <div className="Bootstrap btnToolBar">
        <ButtonToolbar>
          <Button bsSize='small'>Save</Button>
          <Button bsSize='small'>Clean</Button>
          <Button bsSize='small'>Sequentially</Button>
          <Button bsSize='small'>Simultaneously</Button>
        </ButtonToolbar>
      </div>

    }

  });

});