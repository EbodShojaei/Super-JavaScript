const SJS = require('../../../core/SJS');

/**
 * @class Component
 * @extends SJS
 * @description Abstract base class for all UI components
 */
module.exports = class Component extends SJS {
    static cid = 0; // component id

    /**
     * @constructor
     * @param {string} tag - HTML tag for the component
     * @param {Object} attributes - Component attributes
     * @param {Array} children - Child components
     */
    constructor(tag, attributes = {}, children = []) {
        super();
        this.cid = Component.cid++;
        this.tag = tag;
        this.attributes = attributes;
        // this.parent = null;
        // for (const child of children) child.parent = this;
        this.children = children;
    }

    /**
     * @method render
     * @description Render the component (to be implemented by subclasses)
     */
    render() {
        throw new Error('render method must be implemented');
    }

    /**
     * @method append
     * @description Append a child component
     */
    append(child) {
        this.children.push(child);
    }

    /**
     * @method remove
     * @description Remove a child component
     */
    remove(cid) {
        this.children = this.children.filter(child => child.cid !== cid);
    }

    /**
     * @method toJSON
     * @description Convert the component to JSON
     */
    toJSON() {
        return {
            cid: this.cid,
            tag: this.tag,
            attributes: this.attributes,
            children: this.children.map(child => child.toJSON())
        };
    };
};