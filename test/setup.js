const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const noop = () => {};

Enzyme.configure({ adapter: new Adapter() });

require.extensions['.css'] = noop;
require.extensions['.ico'] = noop;
require.extensions['.png'] = noop;
require.extensions['.svg'] = noop;
