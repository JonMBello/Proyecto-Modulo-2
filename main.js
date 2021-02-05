//Función que agrega nuevas tasks a la lista.
var taskNumber = 0;
var taskContainer = document.createElement("div");
taskContainer.className = "task-container"

var mainContainer = document.getElementById("app");
var newTaskText = document.querySelector("input");

document.querySelector("button").addEventListener("click", function(event){
    event.preventDefault();

    var divTask = document.createElement("div");
    divTask.className = "task";
    divTask.id = "task" + taskNumber; 

    var checkTask = document.createElement("input");
    checkTask.type = "checkbox"
    checkTask.id = "checkTasck" + taskNumber;

    var labelTask = document.createElement("label");
    var labelText = document.createTextNode(newTaskText.value);
    labelTask.appendChild(labelText);
    labelTask.id = "labelTask" + taskNumber;

    var buttonTask = document.createElement("button");
    buttonTask.id = "deleteButton" + taskNumber;
    var buttonText = document.createTextNode("Delete");
    buttonTask.appendChild(buttonText);

    divTask.appendChild(checkTask);
    divTask.appendChild(labelTask);
    divTask.appendChild(buttonTask);
    taskContainer.appendChild(divTask);
    mainContainer.appendChild(taskContainer);

    //adding events
    checkTask.addEventListener("click", taskComplete(divTask.id));
    buttonTask.addEventListener("click", deleteTask(divTask.id));

    taskNumber += 1;
});

// newTaskButton.addEventListener("click", newTask(taskNumber));
// preventDefault();
// function newTask(taskNum) {
//     var divTask = document.createElement("div");
//     divTask.className = "task";
//     divTask.id = "task" + taskNum; 
//     var checkTask = document.createElement("input");
//     checkTask.type = "checkbox"
//     checkTask.id = "checkTasck" + taskNum;
//     var labelTask = document.createElement("label");
//     labelTask.id = "labelTask" + taskNum;
//     var buttonTask = document.createElement("button");
//     buttonTask.id = "deleteButton" + taskNum;

//     divTask.appendChild(checkTask);
//     divTask.appendChild(labelTask);
//     divTask.appendChild(buttonTask);
//     taskContainer.appendChild(divTask);
//     mainContainer.appendChild(taskContainer);

//     //adding events
//     checkTask.addEventListener("click", taskComplete(divTask.id));
//     buttonTask.addEventListener("click", deleteTask(divTask.id));

//     self.taskNumber += 1;
// }
//Función que marca una task como completada.
function taskComplete(id) {

}
//Función que elimina una task que no necesite.
function deleteTask(id) {

}