define(function (require, exports, module) {

  'use strict';

  var {React} = require('module!../../../libReact/src/main');
  var PropTypes = React.PropTypes;
  var {DragSource, DropTarget} = require('../vendors/react-dnd');
  var {Button, DropdownButton, Glyphicon, Input, MenuItem,ButtonToolbar} = require('module!../../../libReactBootstrap/src/main');

  var Types = {
    CARD: 'card'
  };

  const cardSource = {
    beginDrag(props) {
      return {
        id: props.id,
        originalIndex: props.findCard(props.id).index
      };
    },
    endDrag (props, monitor) {
      var item = monitor.getItem();
      var droppedId = item.id;
      var originalIndex = item.originalIndex;
      var didDrop = monitor.didDrop();
      if (!didDrop) {
        props.moveCard(droppedId, originalIndex);
      }
    }
  };

  const cardTarget = {
    canDrop: function canDrop() {
      return true;
    },
    hover(props, monitor) {
      const draggedId = monitor.getItem().id;

      if (draggedId !== props.id) {
        var overCard = props.findCard(props.id);
        var overIndex = overCard.index;
        props.moveCard(draggedId, overIndex);
      }
    }
  };

  const dropTargetDecorator = DropTarget(Types.CARD, cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }));

  const dragSourceDecorator = DragSource(Types.CARD, cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }));

  var PhoneCard = React.createClass({

    propTypes: {
      connectDragSource: PropTypes.func.isRequired,
      connectDropTarget: PropTypes.func.isRequired,
      isDragging: PropTypes.bool.isRequired,
      lastOne: PropTypes.bool
    },
    getInitialState() {
      return {
        ringCycle: this.props.phone.ringCycle
      };
    },

    ringCycleOnSelect(item) {
      this.state.ringCycle = item;
      this.props.phone.ringCycle = item;
      this.setState(this.state);
    },

    render() {

      const { phone, isDragging, connectDragSource, connectDropTarget } = this.props;
      let cardClassName = "phone-card " + (isDragging ? 'phone-card-grabbing' : '');

      this.props.lastOne && (cardClassName = cardClassName + " last-card");

      var titleNode = getTitleNode(phone);
      var isExistingPhone = isExistPhone(phone);

      return connectDragSource(connectDropTarget(
        <div className={cardClassName}>
          <p>Name: {titleNode}</p>

          {isExistingPhone ? '' : <p>Number: {phone.phoneNumberInfo.formattedNumber}</p> }

          <p>isActive: {phone.enabled ? 'true' : 'false'}</p>

          <p>
            <ButtonToolbar>
              <div className="ringCycleLabel">Ring for:</div>
              {renderRingCycleDropdownButton(phone.ringCycle, this.ringCycleOnSelect)}</ButtonToolbar>
          </p>
        </div>
      ));

      function getTitleNode(phone) {
        var titleNode;

        if (isExistPhone(phone)) {
          titleNode = phone.firstName + " " + phone.lastName + " Existing Phone";
        } else if (isOtherPhone(phone)) {
          titleNode = <span className="title-editable">{phone.phoneNumberInfo.name}</span>;
        } else {
          titleNode = phone.type;
        }
        return titleNode;
      }

      function isOtherPhone(phone) {
        return phone.type.startsWith("Other");
      }

      function isExistPhone(phone) {
        return phone.type == "PhoneLine";
      }

      function renderRingCycleDropdownButton(current, ringCycleOnSelect) {

        return (
          <DropdownButton bsStyle='default' title={getItemsTitle(current)} key={current}>
            {renderItems(ringCycleOnSelect)}
          </DropdownButton>
        );

        function renderItems(ringCycleOnSelect) {
          var items = [];
          for (var i = 1; i <= 15; i++) {
            items.push(<MenuItem eventKey={i} onSelect={ringCycleOnSelect}>{getItemsTitle(i)}</MenuItem>);
          }
          return items;
        }

        function getItemsTitle(i) {
          return (i * 5) + " secs";
        }
      }
    }
  });

  module.exports = dropTargetDecorator(dragSourceDecorator(PhoneCard));
});



