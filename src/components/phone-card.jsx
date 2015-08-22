define(function (require, exports, module) {

    'use strict';

    var {React} = require('module!../../../libReact/src/main');
    var PropTypes = React.PropTypes;
    var {DragSource, DropTarget} = require('../vendors/react-dnd');
    var {Button, ButtonLink, Glyphicon, Input, Label} = require('module!../../../libReactBootstrap/src/main');

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
            id: PropTypes.any.isRequired,
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

            const { id, isDragging, connectDragSource, connectDropTarget } = this.props;
            let cardClassName = "phone-card " + (isDragging ? 'phone-card-grabbing' : '');

            this.props.lastOne && (cardClassName = cardClassName + " last-card");

              var titleNode;
              var phone = this.state.data.phone;

              if (this.state.data.isExistPhone) {
                titleNode = <h5> {this.state.data.existPhoneLabel}</h5>
              } else if (this.state.data.titleEditable) {
                titleNode = <Input type="text"/>
              } else {
                titleNode = <h5>{phone.type}</h5>;//<Label value={phone.type}/>;
              }

            return connectDragSource(connectDropTarget(
                <div className={cardClassName}>

                    <p>Editable: {this.state.data.titleEditable} |isExistPhone: {this.state.data.isExistPhone}</p>
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



