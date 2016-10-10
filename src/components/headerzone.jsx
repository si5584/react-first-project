var React = require('react');

var headerZone = React.createClass({
  render : function(){

    var headerStyle = {
      fontFamily: 'Lobster',
      color: '#777'
    };

    if (this.props.headerColor) {
      headerStyle.background = this.props.headerColor;
    };

    return (
      <div style={headerStyle}>
        <h3>{this.props.text}</h3>
      </div>
    );
  }
});

module.exports = headerZone;
