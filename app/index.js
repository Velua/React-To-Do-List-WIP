var React = require('react');
var ReactDOM = require('react-dom')
var List = require('./List')
var Interface = require('./Interface')


var ToDoList = React.createClass({

	getInitialState: function() {
		return {
			Textbox: "",
			Todos: ["fefw", "fewfew"]
		}
	},

	handleNewTodo: function(todo){
		var list = this.state.Todos
		list.push(todo)
		this.setState({
			Todos: list
		})

	},

	handleChange: function(e){
		var todo = e.target.value;
		this.setState({
			Textbox: todo
		})
		console.log(this.state.Textbox)
	},

	render: function(){
		return (<div>
			<h1>To Do List App</h1>

			<Interface onClick={this.handleNewTodo} onChange={this.handleChange}/>
			<List data={this.state.Todos}/>

			</div>)
	}
})


ReactDOM.render(<ToDoList />, document.getElementById('app'))