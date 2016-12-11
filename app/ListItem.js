var React = require('react');

var ListItem = function(props){
	return <li key={props.id}>{props.text}</li>
}

module.exports = ListItem