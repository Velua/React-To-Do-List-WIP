var React = require('react');
var ListItem = require('./ListItem');

var List = function(props){
	return(

		<ul>
			{props.list_data.map(function(todo, index){
				return <ListItem key={todo.id} text={todo} />
			})}
		</ul>

		)
}


module.exports = List