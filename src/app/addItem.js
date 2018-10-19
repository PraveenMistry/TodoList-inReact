var React = require('react');
require('./css/addItem.css');

// create TodoItem Component
var AddItem = React.createClass({
	render : function(){
		return (
			<form id="add-todo" onSubmit={this.handleSubmit}>
				<input type="text" ref="newItem" required />
				<input type="submit" value="Add Item To List"  />
			</form>
		);
	},
	// custom function

	handleSubmit : function(e){
		e.preventDefault();
		console.log(this.refs.newItem.value);
		this.props.onAdd(this.refs.newItem.value);
	}

});


// export module 
module.exports = AddItem;


