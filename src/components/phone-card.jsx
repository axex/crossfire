define(function (require, exports, module) {


  'use strict';

  var {React} = require('module!../../../libReact/src/main');
  var PropTypes = React.PropTypes;
  var {DragSource, DropTarget} = require('../vendors/react-dnd');
  var {Button, DropdownButton, Glyphicon, Input, MenuItem,ButtonToolbar, Panel, Badge} = require('module!../../../libReactBootstrap/src/main');
  var CardMixins = require('jsx!./card-mixins.jsx');

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
    mixins: [CardMixins],
    propTypes: {
      connectDragSource: PropTypes.func.isRequired,
      connectDropTarget: PropTypes.func.isRequired,
      isDragging: PropTypes.bool.isRequired,
      lastOne: PropTypes.bool
    },
    getInitialState() {
      return {
        ringCycle: this.props.phone.ringCycle,
        active: this.props.phone.enabled
      };
    },

    ringCycleOnSelect(item) {
      this.state.ringCycle = item;
      this.props.phone.ringCycle = item;
      this.setState(this.state);
    },

    activeOnChange(item) {
      this.state.active = item.target.checked;
      this.props.phone.enabled = item.target.checked;
      this.setState(this.state);
    },

    render() {

      const { index, phone, isDragging, connectDragSource, connectDropTarget } = this.props;
      let cardClassName = "phone-card " + (isDragging ? 'phone-card-grabbing' : '');

      this.props.lastOne && (cardClassName = cardClassName + " last-card");

      var titleNode = this.getTitleNode(phone);
      var isExistingPhone = this.isExistPhone(phone);

        var isNumberEditable = this.isOtherPhone(phone) || ['Home', 'Work', 'Mobile'].indexOf(phone.type) > -1;

        var numberNode;

        if (!isExistingPhone) {
            numberNode = isNumberEditable ?
                <Input type="text" defaultValue={phone.phoneNumberInfo.formattedNumber} /> :
                <p>{phone.phoneNumberInfo.formattedNumber}</p>;
        }

      return connectDragSource(connectDropTarget(
        <Panel className={cardClassName}>
          <div>{titleNode}</div>

          {numberNode}

          <div>Active: <input type='checkbox' checked={this.state.active ? 'true' : '' }
                              onChange={this.activeOnChange} className='phone-card-checkbox'/>
          </div>

          <div>
            <ButtonToolbar>
              <div className="ringCycleLabel">Ring for:</div>
              {renderRingCycleDropdownButton(phone.ringCycle, this.ringCycleOnSelect)}</ButtonToolbar>
          </div>
          <Badge className="phoneCardOrdinal">{index + 1}</Badge>
        </Panel>
      ));
      function renderActiveCheckBox(phone) {

        return <Input type='checkbox' checked={phone.enabled ? 'true' : ''}/>;
      }

      function renderRingCycleDropdownButton(current, ringCycleOnSelect) {

        return (
          <DropdownButton bsStyle='default' bsSize='xsmall' title={getItemsTitle(current)} key={current}>
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



