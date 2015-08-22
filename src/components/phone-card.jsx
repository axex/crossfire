define(function (require, exports, module) {

    'use strict';

    var {React} = require('module!../../../libReact/src/main');
    var PropTypes = React.PropTypes;
    var {DragSource, DropTarget} = require('../vendors/react-dnd');

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
            name: PropTypes.string.isRequired,
            number: PropTypes.string,
            active: PropTypes.bool.isRequired,
            duration: PropTypes.number.isRequired,
            connectDragSource: PropTypes.func.isRequired,
            connectDropTarget: PropTypes.func.isRequired,
            isDragging: PropTypes.bool.isRequired,
            id: PropTypes.any.isRequired
        },

        render() {

            const { id, isDragging, connectDragSource, connectDropTarget } = this.props;
            let cardClassName = "phone-card " + (isDragging ? 'phone-card-grabbing' : '');

            return connectDragSource(connectDropTarget(
                <div className={cardClassName}>
                    <p>ID: {this.props.id}</p>

                    <p>Name: {this.props.name}</p>

                    <p>Number: {this.props.number}</p>

                    <p>isActive: {this.props.active}</p>

                    <p>Ring for: {this.props.duration}</p>

                    <p>{isDragging && ' (and I am being dragged now)'}</p>

                </div>
            ));
        }
    });

    module.exports = dropTargetDecorator(dragSourceDecorator(PhoneCard));
});



