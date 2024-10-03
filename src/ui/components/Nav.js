const Component = require('./abs/Component');
const createComponent = require('../helpers/createComponent');

module.exports = class Nav extends Component {
    constructor(
        attributes = {},
        children = [
            createComponent('ul')({}, [
                createComponent('li')({}, [
                    createComponent('a')({ href: '/' }, ['Home'])
                ]),
                createComponent('li')({}, [
                    createComponent('a')({ href: '/date' }, ['Date'])
                ]),
                createComponent('li')({}, [
                    createComponent('a')({ href: '/file/read' }, ['Read'])
                ]),
                createComponent('li')({}, [
                    createComponent('a')({ href: '/file/write' }, ['Write'])
                ])
            ])
        ]) {
        super('nav', attributes, children);
    }
};