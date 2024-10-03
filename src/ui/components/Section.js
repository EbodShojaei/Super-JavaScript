const Section = require('./abs/Component');

module.exports = class Section extends Component {
    constructor(attributes = {}, children = []) {
        super('section', attributes, children);
    }
};