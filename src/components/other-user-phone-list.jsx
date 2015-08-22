define(function (require, exports, module) {

  var {React} = require('module!../../../libReact/src/main'),
    {ListGroup, ListGroupItem, Alert} = require('module!../../../libReactBootstrap/src/main');

  module.exports = React.createClass({


    propTypes: {
      otherUserPhones: React.PropTypes.object
    },

    addOtherPhone (otherUserPhone) {
      this.props.addOtherUserPhone(otherUserPhone);
    },

    render(){
      var otherUserPhones = this.props.otherUserPhones || [];
      var hasOtherUserPhones = otherUserPhones.length > 0;
      if (hasOtherUserPhones) {
        return <div className="Bootstrap otherUserPhonesPanel">
          <Alert bsStyle='warning'>
            <strong>Other User's Phones!</strong>
          </Alert>
          <ListGroup>
            {otherUserPhones.map((otherUserPhone)=> {
              return (<ListGroupItem onClick={this.addOtherPhone.bind(this, otherUserPhone)}>{otherUserPhone.phoneNumberInfo.name + otherUserPhone.phoneNumberInfo.formattedNumber}</ListGroupItem>);
            })}
          </ListGroup></div>
      } else {
        return null
      }

    }

  });

});
