var list = document.getElementById('list');
var tasks = [];

//creer un element//
function onTaskSubmit() {
  var inputValue = document.getElementById('userInput').value;
  var task = { value: inputValue, status: 'to do' };
  tasks.push(task);
  displayList();
}

 //modification //
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

  //select status//

  var list = document.getElementById("list")
  var tasks = []
  
  
  function onSelectChange(index) {
    console.log(index)
    var select = document.getElementsByClassName("select")[index]
    console.log(select.value)
    tasks[index].status = select.value
    displayList()
  }
  
  function onTaskSubmit() {
    var inputValue = document.getElementById("input").value
    var task = { value: inputValue, status: "to do" }
    tasks.push(task)
    displayList()
  }
  
  function displayList() {
    list.innerHTML = ``
  
    tasks.forEach(function(task, i) {
      list.innerHTML = list.innerHTML + `
        <li class="item">
          <p>${task.value}</p>
          <p>${task.status}</p>
          <select class="select" onChange="onSelectChange(${i})">
            <option ${task.status === "to do" ? 'selected' : ''} value="to do">To do</option>
            <option ${task.status === "doing" ? 'selected' : ''} value="doing">Doing</option>
            <option ${task.status === "done" ? 'selected' : ''} value="done">Done</option>
          </select>
        </li>
      `
    })
  }

//supprimer//
function displayList() {
    console.log("display");
  list.innerHTML = ``;


  tasks.forEach(function (task, index) {
    list.innerHTML =
      list.innerHTML +
      `
    <div class="tasklin">
    <input type="checkbox" class="circle-checkbox">
    <li>${task.value}</li>
        <button class="button" onClick="edit(${index})"><img src="./image/edit.png" alt="editing-logo"></button> 
        <button class="button" onClick="remove(${index})"><img src="./image/trash.png" alt="deleting-logo"></button>     
      </li>
      `;
  });
}

function remove(index) {
    tasks.splice(index, 1);
    displayList();
  }

// filtrer//

function button(filter) {
  if (filter === 'todo') {
    var toDoList = tasks.filter(function (task) {
      return (task.status = 'to do');
    });
    return toDoList;
  }
  if (filter === 'doing') {
    var doingList = tasks.filter(function (task) {
      return (task.status = 'doing');
    });
    return doingList;
  }
  if (filter === 'done') {
    var doneList = tasks.filter(function (task) {
      return (task.status = 'done');
    });
    return doneList;
  }
}



//taches aleaoire //

function listRandom(){
    var randomBtn = document.getElementById("random");
    var randomList = ["Faire les courses","Aller à la gym","Faire du yoga","Allez chercher les enfants à l'école","Faire le ménage"]
   
     var random = randomList[Math.floor(Math.random() * randomList.length)];
     console.log(random);
     var task = { value: random, status: 'to do' };
    tasks.push(task);
    console.log(tasks);
    displayList();

     
 }
