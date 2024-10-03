const Component = require('.../abs/Component');

module.exports = class Header extends Component {
    constructor(attributes = {}, children = []) {
        super('header', attributes, children);
    }
};