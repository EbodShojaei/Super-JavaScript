const assert = require('assert');
const Nav = require('../../../_modules/sjs/src/ui/components/Nav');

const nav = new Nav({ id: 'main-nav' });

console.log(nav);
assert.strictEqual(nav.tag, 'nav');
assert.strictEqual(nav.attributes.id, 'main-nav');
assert.strictEqual(nav.children, []);