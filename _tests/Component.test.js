const Component = require('../../../_modules/sjs/src/ui/components/abs/Component');

const component = new Component('div', { id: 'app' }, [
    new Component('h1', {}, ['Hello, World!'])
]);

console.log(component);