const ComponentFactory = require('../components/factory/ComponentFactory');

/**
 * @function createComponent
 * @param {string} tag - HTML tag for the component
 * @returns {Function} Component creator function
 */
const createComponent = (tag) => (attributes = {}, children = []) =>
    ComponentFactory.create(tag, attributes, children);

module.exports = createComponent;