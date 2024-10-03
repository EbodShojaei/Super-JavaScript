const createComponent = require('../../../_modules/sjs/src/ui/helpers/createComponent');

const component = createComponent('div')({ id: 'app' }, [
    createComponent('h1')({}, ['Hello, World!'])
]);

console.log(component);