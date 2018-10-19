var React = require('react');
require('./css/todoItem.css');

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


module.exports = TodoItem;
// export module 

