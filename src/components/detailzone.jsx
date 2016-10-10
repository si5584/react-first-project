var React = require('react');

var detailZone = React.createClass({
    render : function (){

        var pStyle = {
          fontFamily: 'Helvetica',
          color: '#777'
        };
      
        return (
            <p>{this.props.text}</p>
        );
    }
});

module.exports = detailZone;
