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
            return {id: props.id};
        }
    };

    const cardTarget = {
        hover(props, monitor) {
            const draggedId = monitor.getItem().id;

            if (draggedId !== props.id) {
                props.moveCard(draggedId, props.id);
            }
        }
    };

    const dropTargetWrapper = DropTarget(Types.CARD, cardTarget, connect => ({
        connectDropTarget: connect.dropTarget()
    }));

    const dragSourceWrapper = DragSource(Types.CARD, cardSource, (connect, monitor) => ({
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

            const { isDragging, connectDragSource, connectDropTarget } = this.props;
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

    module.exports = dropTargetWrapper(dragSourceWrapper(PhoneCard));
});



