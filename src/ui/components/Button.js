const Component = require('./abs/Component');

module.exports = class Button extends Component {
    constructor(attributes = {}, children = []) {
        super('button', attributes, children);
    }
};