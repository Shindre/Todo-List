var input = document.querySelector('input')
var button = document.querySelector('button')
var form = document.querySelector('form')
var todos = document.querySelector('.todos')

form.addEventListener('submit',function(event){
    event.preventDefault();
    let val = input.value.trim()
    if(val){
        addTodoElement({
            text: val,
        })
    }
    input.value = ''
})


function addTodoElement(todo){
    var li = document.createElement('li')
    li.innerHTML=`
                <span>${todo.text}</span>
                <i class="ti-trash"></i>
    `
    if(todo.status === 'complete'){
        li.setAttribute('class', 'completed')}

        li.addEventListener('click', function(){
            this.classList.toggle('completed')
        })

        li.querySelector('i').addEventListener('click',function(){
            this.parentElement.remove();
        })

        todos.appendChild(li)

}