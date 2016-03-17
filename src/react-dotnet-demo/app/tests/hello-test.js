var jsdom = require('mocha-jsdom');
var assert = require('assert');
var React = require('react/lib/ReactWithAddons.js');
var TestUtils = React.addons.TestUtils;
var Hello = require('../components/hello.jsx');

describe('hello', function () {
    jsdom();

    it('should render an h1', function () {
        var hello = TestUtils.renderIntoDocument(React.createElement(Hello, null));
        var h1 = TestUtils.findRenderedDOMComponentWithTag(hello, 'h1');
        assert.equal(h1.textContent, 'Hello World');
    });
});