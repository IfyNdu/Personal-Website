'use strict';

// setup file
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// test setup with JSDOM
// const { JSDOM } = require('jsdom');
// const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
// const { window } = jsdom;

// function copyProps(src, target) {
//   const props = Object.getOwnPropertyNames(src)
//       .filter(prop => typeof target[prop] === 'undefined')
//       .reduce((result, prop) => ({
//           ...result,
//           [prop]: Object.getOwnPropertyDescriptor(src, prop),
//       }), {});
//   Object.defineProperties(target, props);
// }

// global.shallow = shallow;
// global.render = render;
// global.mount = mount;
// global.window = window;

//  function setUpDomEnvironment() {
//   const dom = new JSDOM('<!doctype html><html><body></body></html>', {url: 'http://localhost/'});
//   const { window } = dom;

//   global.window = window;
//   global.document = window.document;
//   global.navigator = {
//       userAgent: 'node.js',
//   };
//   copyProps(window, global);
// }

// function copyProps(src, target) {
//   const props = Object.getOwnPropertyNames(src)
//       .filter(prop => typeof target[prop] === 'undefined')
//       .map(prop => Object.getOwnPropertyDescriptor(src, prop));
//   Object.defineProperties(target, props);
// }

// setUpDomEnvironment();

// global.navigator = {
//   userAgent: 'node.js'
// };
// copyProps(window, global);
// configure({ adapter: new Adapter() });

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global);
}
