function addTodo() {
    const todoElement = document.getElementById('new-todo'); // Access new-todo element
    const todo = todoElement.value; // Get and store the value
    todoElement.value = ""; // Clear the input field
    if (todo.length < 3) {
        return alert("You must have at least 3 characters for your to do item")
    }

    const list = document.getElementById("list");
    const li = document.createElement("li");
    const text = document.createTextNode(todo);
    
    li.setAttribute("onclick", "this.remove()");

    li.appendChild(text);
    list.appendChild(li);
}