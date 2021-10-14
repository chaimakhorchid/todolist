var list = document.getElementById("list")
var tasks = []


function onTaskSubmit() {
  var inputValue = document.getElementById("userInput").value
  var task = { value: inputValue, status: "to do" }
  tasks.push(task)
  displayList()
}

function edit(index) {
  // exemple de modif
  tasks[index].status = "doing"
  displayList()
}

function remove(index) {
  tasks.splice(index, 1)
  displayList()
}

//supprimer//
function displayList() {
  list.innerHTML = ``

  tasks.forEach(function(task, index) {
    list.innerHTML = list.innerHTML + `
    <div class="tasklin">
    <input type="checkbox">
    <li>${task.value}</li>
        <button class="button" onClick="edit(${index})"><img src="./image/edit.png" alt="Check task logo"></button> 
        <button class="button" onClick="remove(${index})"><img src="./image/trash.png" alt="Delete ask logo"></button>     
      </li>`
  })

  
  
  
}
//filtrer les taches //
function button(filter){
  if (filter === "todo"){
    var toDoList = tasks.filter(function(task){
      return task.status = "to do"
    })
    return toDoList
  }
  if (filter === "doing"){
    var doingList = tasks.filter(function(task){
      return task.status = "doing"
    })
    return doingList
  }
  if (filter === "done"){
    var doneList = tasks.filter(function(task){
      return task.status = "done"
    })
    return doneList
  }
}

//taches aleaoire //

// var randomBtn = document.getElementById("random");
// var list = ["manger","dormir","boire","pleurer","douche","nettoyer"]


//     function listRandom(list){
//         return list[Math.floor(Math.random() * list.length)];
//     }
//     listRandom();



// function onTaskSubmit(){

//     console.log("bien appeler");
//     }

//     var enterButton = document.getElementById("enter");
//     var input = document.getElementById("userInput");
//     var ul = document.querySelector("ul");
//     var item = document.getElementsByTagName("li");
//     var array = []

//   //Retourner la longueur de l'input//
//     function inputLength() {
//       return input.value.length;
//     }

//   //creer un element et le rajouter a la list//
//     function createListElement() {

//       var li = document.createElement("li");
//       li.appendChild(document.createTextNode(input.value));
//       ul.appendChild(li);
//       input.value = "";

//       var newTask = array.map(function(task){

//       })

//     //supprimer un element
//       var supp = document.createElement("button");
//       supp.appendChild(document.createTextNode("X"));
//       li.appendChild(supp);
//       supp.addEventListener("click", deleteListItem);

//       function deleteListItem() {
//         li.classList.add("delete");
//       }
//   //modifer un element
//       var modif = document.createElement("button");
//       modif.appendChild(document.createTextNode("Modifier"));
//       li.appendChild(modif)
//       modif.addEventListener("click",modifListItem);

//       function modifListItem() {
//         li.classList.add("modifier")
//       }
//     }

//     // cliquer sur le bouton//
//     function addListAfterClick() {

//       if (inputLength() > 0) {
//         createListElement();
//       }
//     }
//     //si on appuie sur la touche entrer ca va creer un nouvelle element//
//     function addListAfterpress(event) {
//       if (inputLength() > 0 && event.which === 13) {
//         createListElement();
//       }
//     }

//     enterButton.addEventListener("click", addListAfterClick);

//     input.addEventListener("keypress", addListAfterpress);
