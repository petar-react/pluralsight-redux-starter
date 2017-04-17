process.env.NODE_ENV = 'test'; //test hotrealoding is disabled


require('babel-register')();


require.extensions['.css'] = function () {return null;}; /*mocka ne razume ekstenzije, pa se ubacuje da bi prosao kroz liniju koda*/
require.extensions['.png'] = function () {return null;}; /*mocka ne razume ekstenzije, pa se ubacuje da bi prosao kroz liniju koda*/
require.extensions['.jpg'] = function () {return null;}; /*mocka ne razume ekstenzije, pa se ubacuje da bi prosao kroz liniju koda*/



var jsdom = require('jsdom').jsdom; /*set jsdom , pomaze za testiranje a da se pri tom ne otvara browser,  i pomaze da simulira browser okurzenje*/

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef
