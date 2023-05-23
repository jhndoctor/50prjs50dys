const form = document.getElementById('form')
const todosUL = document.getElementById('todos')
const input = document.getElementById('input')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => addTodo(todo))
}

function addTodo(todo = null) {
    todoText = input.value 

    if (todo)
        todoText = todo.text

    if (todoText) {
        const todoEl = document.createElement('li')
        todoEl.classList.add('todo')
        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('contextmenu', e => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })

        todosUL.appendChild(todoEl)
        input.value = ''

        updateLS()
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll('li')

    todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}

form.addEventListener('submit', e => {
    e.preventDefault()

    addTodo()
})