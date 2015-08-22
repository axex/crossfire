define(function (require, exports, module) {

  'use strict'
  var {React} = require('module!../../../libReact/src/main'),
    {Button, ButtonLink, Glyphicon, Input, Label} = require('module!../../../libReactBootstrap/src/main');
  var PropTypes = React.PropTypes;
  var {DragSource} = require('../vendors/react-dnd');

  var Types = {
    CARD: 'card'
  };

  /**
   * Specifies the drag source contract.
   * Only `beginDrag` function is required.
   */
  var cardSource = {
    beginDrag(props) {
      // Return the data describing the dragged item
      return props;
    }
  };

  /**
   * Specifies which props to inject into your component.
   */
  function collect(connect, monitor) {
    return {
      // Call this function inside render()
      // to let React DnD handle the drag events:
      connectDragSource: connect.dragSource(),
      // You can ask the monitor about the current drag state:
      isDragging: monitor.isDragging()
    };
  }

  module.exports = React.createClass({

    propTypes: {
      phone: PropTypes.object.isRequired,
      lastOne: PropTypes.bool
    },

    getInitialState() {
      return {
        data: {
          phone: this.props.phone,
          key: 1,
          titleEditable: titleEditable(this.props.phone),
          isExistPhone: isExistPhone(this.props.phone),
          existPhoneLabel: getExistPhoneLabel(this.props.phone)
        }
      };

      function titleEditable(phone) {
        if (phone.type.startsWith("Other")) {
          return true;
        }
        return false;
      }

      function isExistPhone(phone) {
        return phone.type == "PhoneLine";
      }

      function getExistPhoneLabel(phone) {
        return phone.firstName + " " + phone.lastName + " Existing Phone";
      }
    },

    render() {
      console.log(this.state.data);

      const { isDragging, connectDragSource } = this.props;
      var titleNode;
      var phone = this.state.data.phone;

      if (this.state.data.isExistPhone) {
        titleNode = <h5> {this.state.data.existPhoneLabel}</h5>
      } else if (this.state.data.titleEditable) {
        titleNode = <Input type="text"/>
      } else {
        titleNode = <h5>{phone.type}</h5>;//<Label value={phone.type}/>;
      }

      //debugger;
      return connectDragSource(
        <div className={!this.props.lastOne ? 'phone-wrap' : 'phone-wrap last-wrap'}>
          <p>{titleNode}</p>

          <p>Editable: {this.state.data.titleEditable} |isExistPhone: {this.state.data.isExistPhone}</p>

          <p>Name: {this.props.name}</p>

          <p>Number: {this.props.number}</p>

          <p>isActive: {this.props.active}</p>

          <p>Ring for: {this.props.duration}</p>

          <p>{isDragging && ' (and I am being dragged now)'}</p>
        </div>
      )
    }
  });

  module.exports = DragSource(Types.CARD, cardSource, collect)(module.exports);
});
