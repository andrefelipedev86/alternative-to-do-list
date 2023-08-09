let mainInput = document.querySelector('#main-input')
let btnAdd = document.querySelector('#btn-add')
let tasksList = document.querySelector('#tasks')

let arrayTasks = []


function showTasks() {
    let newlist = ""

    arrayTasks.forEach( task => {
      newlist = newlist + `
      <li><p class="item-task">${task}</p></li>
      `
    })
    
    tasksList.innerHTML = newlist
}


function clickBtn() {
  arrayTasks.push(mainInput.value)

showTasks()
}



btnAdd.addEventListener('click', clickBtn)

