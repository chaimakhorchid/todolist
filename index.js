var list = document.getElementById('list');
var tasks = [];

// Function to add a task on the list

function onTaskSubmit() {
  var inputValue = document.getElementById('userInput').value;
  var task = { value: inputValue, status: 'to do' };
  tasks.push(task);
  displayList();
}

// Remove a task

function remove(index) {
  tasks.splice(index, 1);
  displayList();
}

// Display the task on the website

function displayList() {
  list.innerHTML = ``;

  tasks.forEach(function (task, index) {
    list.innerHTML =
      list.innerHTML +
      `
        <div class="tasklin">
          <li>${task.value}</li>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <liclass="dropdown-item">To Do</li>
              <liclass="dropdown-item">Doing</li>
              <liclass="dropdown-item">Done</li>
            </ul>
           <button class="button" onClick="edit(${index})"><img src="./image/edit.png" alt="editing-logo"></button> 
           <button class="button" onClick="remove(${index})"><img src="./image/trash.png" alt="deleting-logo"></button>     
          </li>
        </div>
      `;
  });
}

// Editing the status of the task

// Filter while clicking on the each button 

function button(filter) {
  if (filter === 'todo') {
    var toDoList = tasks.filter(function (task) {
      return (task.status = 'to do');
    });
    return toDoList;
  } else if (filter === 'doing') {
    var doingList = tasks.filter(function (task) {
      return (task.status = 'doing');
    });
    return doingList;
  } else if (filter === 'done') {
    var doneList = tasks.filter(function (task) {
      return (task.status = 'done');
    });
    return doneList;
  }
}

// eviter repetition grâce variable

function edit(index) {
  console.log("message d'indication tasks :", tasks);
  console.log("message d'indication index :" + index);
  console.log("message d'indication de la tâche choisie : ", tasks[index]);

  list.innerHTML = '';
  list.innerHTML =
    list.innerHTML +
    `
    <form onsubmit="editTask(${index}); return false;">
      <input class="editingInput" id="editInput" type="text" placeholder="Edit the task" value="${tasks[index].value}" autocomplete="off">
      <button class="editingButton" id="enter">Edit</button>
    </form>
  `;
}

// edit a task by  
function editTask(index) {
  console.log(
    "Edit task message d'indication de task choisie : ",
    tasks[index]
  );
  var inputValue = document.getElementById('editInput').value;

  console.log(inputValue);

  var task = tasks[index];
  task.value = inputValue;
  displayList();
}
