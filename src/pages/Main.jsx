define(function (require, exports, module) {

  var {React, Router} = require('module!../../../libReact/src/main'),
    Menu = require('module!../../../libReact/src/main').react.Menu;

  var PhoneCard = require('jsx!../components/phone-card.jsx');
  var phones = require('../../data/phones');
  var reactDND = require('../vendors/react-dnd');
  var DragDropContext = reactDND.DragDropContext;
  var HTML5Backend = reactDND.HTML5;

  var mainHandler = React.createClass({
    contextTypes: {
      module: React.PropTypes.object.isRequired
    },

    getInitialState(){
      return {
        form: {
          text: '',
          email: ''
        }
      }
    },

    onChange(form){
      this.setState({form: form});
    },
    render() {
      return <div className="Bootstrap mymodule">
        <div className="layout-table Bootstrap">

          <Menu.Main collapsed="false">
            <Menu.MainItem to="callHandling" label="CallHandling" icon="_Phones"/>
          </Menu.Main>

          <div className="layout-column">

            <Router.RouteHandler {...this.state.form} onChange={this.onChange}/>

          </div>

        </div>
      </div>;
    }
  });

  module.exports = DragDropContext(HTML5Backend)(mainHandler);
});
