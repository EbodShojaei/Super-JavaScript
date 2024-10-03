const Component = require('.../abs/Component');

module.exports = class Footer extends Component {
    constructor(attributes = {}, children = []) {
        super('footer', attributes, children);
    }
};