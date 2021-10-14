var list = document.getElementById("list")
var tasks = []


//creer un element//
function onTaskSubmit() {
  var inputValue = document.getElementById('userInput').value;
  var inputNumberValue = document.getElementById('userInputNumber').value;
  var task = { value: inputValue, status: 'to do', priority: inputNumberValue };
  tasks.push(task);
  displayList(tasks);
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
    displayList(tasks);
  }






  
  //supprimer//
   
function remove(index) {
  tasks.splice(index, 1);
  displayList(tasks);
}
    
function onSelectChange(index) {
  console.log(index)
  var select = document.getElementsByClassName("select")[index]
  console.log(select.value)
  tasks[index].status = select.value
  displayList(tasks)
}
// Editing the status of the task
function displayList(array) {
  list.innerHTML = ``
  array.forEach(function (task, index) {
    var statuCssClass = statusClass(task.status)
    list.innerHTML =
      list.innerHTML +
      `
        <div class="tasklin ${statuCssClass}" >
          <li>
            <div class="titletask">
              <p>${task.value}  <span>priority : ${task.priority}</span><p>
            </div>
            <div class="buttontask">
              <select class="select" onChange="onSelectChange(${index})">
                <option ${task.status === "to do" ? 'selected' : ''} value="to do">To do</option>
                <option ${task.status === "doing" ? 'selected' : ''} value="doing">Doing</option>
                <option ${task.status === "done" ? 'selected' : ''} value="done">Done</option>
              </select>
              <button class="button" onClick="edit(${index})"><img src="./image/edit.png" alt="editing-logo"></button> 
              <button class="button" onClick="remove(${index})"><img src="./image/trash.png" alt="deleting-logo"></button>     
            </div>
          </li>
        </div>
      `;
  });
}


// Filter while clicking on the each button 

function button(filter) {
  console.log(tasks)
  var filterTask = tasks.filter(function(task){
    return task.status === filter || filter === "all"
  })
  console.log(filterTask)
  displayList(filterTask);
}


// randomButton
function listRandom(){
  var randomBtn = document.getElementById("random");
  var randomList = ["Faire les courses","Aller à la gym","Faire du yoga","Allez chercher les enfants à l'école","Faire le ménage"]

  var random = randomList[Math.floor(Math.random() * randomList.length)];
  console.log(random);
   var task = { value: random, status: 'to do' };
  tasks.push(task);
  console.log(tasks);
  displayList(tasks);

}

//divers//

function statusClass(status){
    if(status === 'to do'){
        return "red"
    }else if (status === 'doing'){
        return "yellow"
    }else{
        return "blue"
    }
} 
