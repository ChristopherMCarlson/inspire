import TodoService from "./todo-service.js";

var todoService = new TodoService



// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function draw(todos) {
	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
	var template = ``
	if (`${todos.length}` === "0") {
		template += `
		<p class="mt-3">No todos remaining</p>
		` } else {
		template += `
	<p class="mt-3">${todos.length} todos remaining</p>
	`}
	todos.forEach(todo => {
		let completed = todo.completed
		if (completed === false) {
			template += `
			<input type="checkbox" id="${todo.description}" onchange="app.controllers.toDoController.toggleTodoStatus('${todo._id}')"/>
			<label for="${todo.description}" class="valign-center">${todo.description}<i class="material-icons md-18" onclick="app.controllers.toDoController.removeTodo('${todo._id}')">clear</i></label>
			<br>
			`
		} else {
			template += `
			<input type="checkbox" id="${todo.description}" onchange="app.controllers.toDoController.toggleTodoStatus('${todo._id}')" checked/>
			<label for="${todo.description}" class="valign-center"><strike>${todo.description}</strike><i class="material-icons md-18" onclick="app.controllers.toDoController.removeTodo('${todo._id}')">clear</i></label>
		<br>
			`
		}
	})
	template += `
	<div class="row">
	<form onsubmit="app.controllers.toDoController.addTodoFromForm(event)" class="input-group input-group-sm m-3">
  <input type="text" class="form-control" placeholder="New To Do" aria-label="New ToDo" aria-describedby="basic-addon2" name="todo">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="submit">Submit</button>
  </div>
</form>
	</div>
	`
	document.getElementById('todo').innerHTML = template
	//DONT FORGET TO LOOP
}


export default class TodoController {
	constructor() {
		getTodos()
		// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			description: form.todo.value
		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// ADD , getTodos BACK INTO TOGGLETODOSTATUS ABOVE!!!!!!!!!!!!!!!
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}



}
