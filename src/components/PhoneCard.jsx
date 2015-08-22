define(function (require, exports, module) {

  'use strict'
  var {React} = require('module!../../../libReact/src/main');
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
      phone: PropTypes.object.isRequired
    },

    getInitialState() {
      return {
        data: {
          phones: {},
          key: 1
        }
      };

      function titleEditable() {

      }
    },

    render() {
      const { isDragging, connectDragSource } = this.props;
      return connectDragSource(
        <div>
          <div className="phone-wrap">
            <p>Name: {this.props.name}</p>

            <p>Number: {this.props.number}</p>

            <p>isActive: {this.props.active}</p>

            <p>Ring for: {this.props.duration}</p>

            <p>{isDragging && ' (and I am being dragged now)'}</p>
          </div>
        </div>
      )
    }
  });

  module.exports = DragSource(Types.CARD, cardSource, collect)(module.exports);
});
