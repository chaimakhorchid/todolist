var list = document.getElementById("list")
var tasks = []

function onTaskSubmit() {
  var inputValue = document.getElementById("userInput").value
  var task = { value: inputValue, status: "to do" }
  tasks.push(task)
  
  list.innerHTML = ``
  
  tasks.forEach(function(task) {
    list.innerHTML = list.innerHTML + `
      <div class="tasklin">
        <input type="checkbox">
        <li>${task.value}</li>
        <button class="button"><img src="./image/edit.png" alt="Check task logo"></button>
        <button class="button" ="delete" onclick="onClickRemove(${inputValue})"><img src="./image/trash.png" alt="Delete ask logo"></button>
      </div>
    `
  })
}

function suppression(element){
    var container = document.getElementById("delete");
    container.removeChild(element.parentNode.parentNode);
  }



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
