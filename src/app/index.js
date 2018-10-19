var React = require('react');
var ReactDOM = require('react-dom');

import {Router, Route, browserHistory, Link} from 'react-router'; //es2015

//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

// CSS reuires
require('./css/index.css');

// SETUP ROUTING
var App = React.createClass({
	render : function(){
		return (
			<Router history={browserHistory}>
				<Route path={'/'} component={TodoComponent}></Route>
				<Route path={'/about'} component={About}></Route>
			</Router>
		);
	}
});


// create Component
var TodoComponent = React.createClass({
	getInitialState: function(){
		console.log("getInitialState");
		return {
			todos: ["wash up","eat ome cheese","take a nap"]
		};
	},//getInitialState
	render: function(){
		console.log("render");
		var todos = this.state.todos;
		
		todos = todos.map(function(item,index){
			return (
				<TodoItem item={item} key={index}  onDelete={this.onDelete}/>
			);
		}.bind(this));

		return (
		<div id="todo-list">
			<Link to={'/about'}>About</Link>
			<p>The busiest people have the most leisure...</p>
			<ul>                                
				{todos}
			</ul>
			<AddItem onAdd={this.onAdd}/>
		</div>		

		);		
	},//render
	// create custom function
	onDelete : function(item){
		var updateTodos = this.state.todos.filter(function(val,index){
			return item !== val;
		});
		this.setState({
			todos: updateTodos
		});
	},//delete

	onAdd : function(item){
		var updateTodos = this.state.todos;
		updateTodos.push(item);
		this.setState({
			todos: updateTodos
		});
	},

	// lifecycle functions
	componentWillMount : function(){
		console.log("componentWillMount");
	},
	componentDidMount : function(){
		console.log("componentDidMount");
	},
	componentWillUpdate : function(){
		console.log("componentWillUpdate");
	},
});

// create TodoItem Component
var TodoItem = React.createClass({
	render : function(){
		return (
			<li>
				<div className="todo-item">
					<span className="item-name">{this.props.item}</span>
					<span className="item-delete" onClick={this.handleDelete}> X </span>
				</div>
			</li>
		);
	},
	// custom function
	handleDelete: function(){
		this.props.onDelete(this.props.item);
	}
});

// put component into html
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));

