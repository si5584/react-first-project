var React = require('react');
var headerZone = require('./headerzone.jsx');
var detailZone = require('./detailzone.jsx');

var infoBox = React.createClass({

    render: function () {
        return (
          <div nameClass="col-sm-4">
            <headerZone text={this.props.title} headerColor={this.props.color}/>
            <detailZone text={this.props.content} />
          </div>
        );
    }
});

module.exports = infoBox;
