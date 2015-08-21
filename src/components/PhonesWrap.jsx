define(function (require, exports, module) {

  'use strict'
  var {React} = require('module!../../../libReact/src/main');
  var PropTypes = React.PropTypes;
  var {DragSource} = require('../vendors/react-dnd');
  var PhoneCard = require('jsx!../components/PhoneCard.jsx');


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

  let Phone = React.createClass({
    propTypes: {
      phoneWrap: PropTypes.object
    },
    render() {
      const { isDragging, connectDragSource } = this.props;


      return connectDragSource(
        <div className="phone-wrap">
          {
            this.props.phoneWrap && each(this.props.phoneWrap.groupPhones, (gp) => {
              return <PhoneCard phone={gp}/>
            })
          }
        </div>
      );
    }
  });

  module.exports = DragSource(Types.CARD, cardSource, collect)(Phone)
});



