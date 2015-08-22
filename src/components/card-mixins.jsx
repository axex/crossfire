define(function (require, exports, module) {

    var {React} = require('module!../../../libReact/src/main');
    var {Button, DropdownButton, Glyphicon, Input, MenuItem,ButtonToolbar, Panel, Badge} = require('module!../../../libReactBootstrap/src/main');

    module.exports = {
        getTitleNode(phone) {
            var titleNode;

            if (this.isExistPhone(phone)) {
                titleNode = phone.firstName + " " + phone.lastName + " Existing Phone";
            } else if (this.isOtherPhone(phone)) {
                titleNode = <Input type="text" defaultValue={phone.phoneNumberInfo.name} />;
            } else {
                titleNode = phone.type;
            }
            return titleNode;
        },
        isOtherPhone(phone) {
            return phone.type.startsWith("Other");
        },
        isExistPhone(phone) {
            return phone.type == "PhoneLine";
        }
    };
});