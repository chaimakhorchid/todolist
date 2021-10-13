var array = []

function onTaskSubmit() {
  var inputTask = document.getElementById("input").value
  
  array.map(function(object) {
    var newTask = {
      value: inputTask,
      status: "to do"
    }
  })
  console.log(array)
}

onTaskSubmit()