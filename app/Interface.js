var React = require('react');


var Interface = function(props){
	return (
		<div>
		<input type="text" onChange={props.onChange} ></input>
		<button onClick={props.onClick} />

		</div>

		)
}

module.exports = Interface