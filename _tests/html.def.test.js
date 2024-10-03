const { EL, PROPS, HTML } = require('../../../_modules/sjs/src/defs/html.def.js');

// Example: Accessing properties for specific elements
console.log('Running tests for html.def.js');
console.log('Test #1');
console.log(HTML[EL.img]); // Outputs: ['src', 'alt', 'width', 'height', 'loading', 'srcset', 'sizes']

console.log('Test #2');
console.log(HTML[EL.a]);   // Outputs: ['href', 'target', 'rel', 'download']

console.log('Test #3');
console.log(HTML['img']);     // Outputs: ['src', 'alt', 'width', 'height', 'loading', 'srcset', 'sizes']

console.log('Test #4');
console.log(PROPS['width']); // Outputs: { _: 'width', type: 'number' }

console.log('Test #5');
console.log(PROPS['width']._); // Outputs: 'width'

console.log('Test #6');
console.log(PROPS['width'].type); // Outputs: 'number'