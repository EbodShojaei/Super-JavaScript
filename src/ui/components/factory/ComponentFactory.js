const { EL, PROPS, HTML, LIM_HTML } = require('../../../defs/html.def');
const Component = require('../abs/Component');

/**
 * @class ComponentFactory
 * @description Factory class for creating UI components
 */
module.exports = class ComponentFactory {
    /**
     * @method create
     * @param {string} tag - HTML tag for the component
     * @param {Object} attributes - Component attributes
     * @param {Array} children - Child components
     * @returns {Component} Created component
     */
    static create(tag, attributes = {}, children = []) {
        this.validateTag(tag);
        this.validateAttributes(tag, attributes);

        return new Component(tag, attributes, children);
    }

    /**
     * @method validateTag
     * @param {string} tag - HTML tag to validate
     * @throws {Error} If tag is invalid
     */
    static validateTag(tag) {
        if (!EL[tag]) {
            throw new Error(`Invalid HTML tag: ${tag}`);
        }
    }

    /**
     * @method validateAttributes
     * @param {string} tag - HTML tag
     * @param {Object} attributes - Attributes to validate
     * @throws {Error} If attributes are invalid
     */
    static validateAttributes(tag, attributes) {
        if (LIM_HTML[tag]) {
            throw new Error(`${tag} does not accept attributes`);
        }

        const validProps = HTML[tag] || [];
        for (const attr in attributes) {
            if (!validProps.some(prop => prop._ === attr)) {
                throw new Error(`Invalid attribute ${attr} for ${tag}`);
            }
            this.validateAttributeType(attr, attributes[attr]);
        }
    }

    /**
     * @method validateAttributeType
     * @param {string} attr - Attribute name
     * @param {*} value - Attribute value
     * @throws {Error} If attribute type is invalid
     */
    static validateAttributeType(attr, value) {
        const propDef = PROPS[attr];
        if (!propDef) return;

        const type = typeof value;
        if (type !== propDef.type && !(propDef.type.includes('|') && propDef.type.includes(type))) {
            throw new Error(`Invalid type for ${attr}. Expected ${propDef.type}, got ${type}`);
        }
    }
};