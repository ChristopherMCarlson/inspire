

const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/ChrisMCarlson/todos/',
	timeout: 30000
});

function logError(e) {
	console.log(e)
}


let todoList = ''

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				console.log(res.data.data)
				todoList = (res.data.data)
				draw(res.data.data)
			})
			.catch(logError)
	}

	addTodo(todo, callback) {
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				todoList.push(res)
				console.log(todoList)
				callback(res)
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, callback) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		var todo = todoList.find(toDoObj => toDoObj._id == todoId);///MODIFY THIS LINE
		todo.completed = !todo.completed;
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				callback(res)
			})
			.catch(logError)
	}

	removeTodo(todoId, callback) {
		// Umm this one is on you to write.... The method is a DELETE
		// var todo = todoList.find(toDoObj => toDoObj._id == todoId);
		todoApi.delete(todoId)
		this.getTodos(callback)
	}

}
