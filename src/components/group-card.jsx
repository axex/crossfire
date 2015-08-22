define(function (require, exports, module) {

  'use strict';

  var {React} = require('module!../../../libReact/src/main');
  var PropTypes = React.PropTypes;
  var {DragSource, DropTarget} = require('../vendors/react-dnd');
  var {DropdownButton, Glyphicon, Input, MenuItem,ButtonToolbar, Panel, Badge} = require('module!../../../libReactBootstrap/src/main');
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

  var GroupCard = React.createClass({
    mixins: [CardMixins],
    propTypes: {
      connectDragSource: PropTypes.func.isRequired,
      connectDropTarget: PropTypes.func.isRequired,
      isDragging: PropTypes.bool.isRequired,
      id: PropTypes.any.isRequired
    },
    ringCycleOnSelect(item) {
      this.state.ringCycle = item;
      this.props.phones.map((phone)=> {
        phone.ringCycle = item;
      })
      this.setState(this.state);
    },
    getInitialState() {
      var ringCycle = 0;
      this.props.phones.map((phone)=> {
        ringCycle = phone.ringCycle > ringCycle ? phone.ringCycle : ringCycle;
      })

      return {
        ringCycle: ringCycle,
        active: true
      };
    },
    activeOnChange(item) {
      alert("Inactive and unGroup todo...");
    },

    render() {
      var self = this;

      const { index, phones, isDragging, connectDragSource, connectDropTarget } = this.props;
      let cardClassName = "phone-card " + (isDragging ? 'phone-card-grabbing' : '');


      function getNumberNode(phone) {
        var isNumberEditable = self.isOtherPhone(phone) || ['Home', 'Work', 'Mobile'].indexOf(phone.type) > -1;
        var numberNode;
        var isExistingPhone = self.isExistPhone(phone);

        if (!isExistingPhone) {
          numberNode = isNumberEditable ?
            <Input type="text" defaultValue={phone.phoneNumberInfo.formattedNumber}/> :
            <p>{phone.phoneNumberInfo.formattedNumber}</p>;
        }
        return numberNode;
      }


      return connectDragSource(connectDropTarget(
        <Panel className="group-phone-card">
          <Badge className="phoneCardOrdinal">{index + 1}</Badge>
          <Glyphicon glyph='paperclip' className="groupIconPosition"/>

          <div className="inlineEle groupPhoneInfo">
            {
              phones.map(function (phone, idx) {
                cardClassName = idx == phones.length - 1 ? cardClassName + ' phone-card-last' : cardClassName;
                return <div className={cardClassName}>
                  <p>{self.getTitleNode(phone)}</p>
                  {getNumberNode(phone)}
                </div>
              })
            }
          </div>

          <div className="inlineEle middleAlign">
            <div>Active: <input type='checkbox' checked={this.state.active ? 'true' : '' } onChange={this.activeOnChange}
                                onChange={this.activeOnChange} className='phone-card-checkbox'/>
            </div>
            <div>
              <ButtonToolbar>
                <div className="ringCycleLabel">Ring for:</div>
                {renderRingCycleDropdownButton(this.state.ringCycle, this.ringCycleOnSelect)}</ButtonToolbar>
            </div>
          </div>

        </Panel>
      ));

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

  module.exports = dropTargetDecorator(dragSourceDecorator(GroupCard));
});
