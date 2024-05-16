const cl = console.log;

const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const todoItemControl = document.getElementById("todoItem");

const todoArr =[
    {
        todoItem : "Javascript",
        todoid : 1234
    }
];

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};


const creatTodoList = (arr) =>{
    let result ="";
    arr.forEach(todo => {
        result += `<li class="list-group-item" id="${todo.todoid}">${todo.todoItem}</li>`
    });

    todoList.innerHTML = result;
}

creatTodoList(todoArr)


const ontodoAdd = (eve) =>{
    eve.preventDefault();
    let newTodo = {
        todoItem : todoItemControl.value,
        todoid : uuidv4()
    }

    todoArr.unshift(newTodo)
    cl(todoArr);
    creatTodoList(todoArr);
    todoForm.reset();
}



todoForm.addEventListener("submit", ontodoAdd);