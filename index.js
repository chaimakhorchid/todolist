// array tasks
var tasks = [];

// this function will allow you to validate your new created task 
function onTaskSubmit() {
    var task = {
        value: document.getElementById('userInput').value,
        tastStatus: 'to do'
    };
    tasks.push(task);
    console.log(task);
    return false;
}