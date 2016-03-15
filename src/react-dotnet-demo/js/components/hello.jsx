var React = require('react');

var Hello = React.createClass({
    onToggle: function () {
        this.setState({ toggle: !this.state.toggle });
    },
    getInitialState: function () {
        return { toggle: false };
    },
    render: function () {
        return (
            <div>
                <h1>Hello World</h1>
                <input type="checkbox" onChange={this.onToggle} />
                <span>Toggle: {this.state.toggle ? 'True' : 'False'}</span>
            </div>
        );
    },
});

module.exports = Hello;