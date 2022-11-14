//Selectors 

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList= document.querySelector('.todo-list')


//event list 

todoButton.addEventListener('click',addTodo)


//function

function addTodo(event){
event.preventDefault()


//Create to do div 
const todoDiv = document.createElement('div')
todoDiv.classList.add("todo")
//Create to do li 
const newTodoItem = document.createElement('li')
newTodoItem.innerText="hey"
todoDiv.classList.add("todo-item")

todoDiv.appendChild(newTodoItem)
//Create delete and completed buttons
 const  completedButton = document.createElement("button")
 completedButton.innerHTML= '<li class="fas fa-check"></li>'
 completedButton.classList.add("complete-btn")
 todoDiv.appendChild(completedButton);

 const  deleteButton = document.createElement("button")
deleteButton.innerHTML='<i class="fas fa-trash"></i>'
deleteButton.classList.add("delete-btn")
 todoDiv.appendChild(deleteButton)

 //append to list
 todoList.appendChild(todoDiv)


}