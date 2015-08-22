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
                ringCycle: this.props.phone.ringCycle
            };
        },

        ringCycleOnSelect(item) {
            this.state.ringCycle = item;
            this.props.phone.ringCycle = item;
            this.setState(this.state);
        },

        render() {

            const { index, phone, isDragging, connectDragSource, connectDropTarget } = this.props;
            let cardClassName = "phone-card " + (isDragging ? 'phone-card-grabbing' : '');

            this.props.lastOne && (cardClassName = cardClassName + " last-card");

            var titleNode = this.getTitleNode(phone);
            var isExistingPhone = this.isExistPhone(phone);

            return connectDragSource(connectDropTarget(
                <Panel className={cardClassName}>
                    <p>Name: {titleNode}</p>

                    {isExistingPhone ? '' : <p>Number: {phone.phoneNumberInfo.formattedNumber}</p> }

                    <p>isActive: {phone.enabled ? 'true' : 'false'}</p>

                    <p>
                        <ButtonToolbar>
                            <span className="ringCycleLabel">Ring for:</span>
                            {renderRingCycleDropdownButton(phone.ringCycle, this.ringCycleOnSelect)}</ButtonToolbar>
                    </p>
                    <Badge className="phoneCardOrdinal">{index + 1}</Badge>
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

    module.exports = dropTargetDecorator(dragSourceDecorator(PhoneCard));
});



