//Función que agrega nuevas tasks a la lista.
let taskNumber = 0;
var taskContainer = document.createElement("div");
taskContainer.className = "task-container"

var mainContainer = document.getElementById("app");
var newTaskText = document.querySelector("input");

document.querySelector("button").addEventListener("click", function(event){
    event.preventDefault();
    value = taskNumber;
    if(newTaskText.value != ""){        
        var divTask = document.createElement("div");
        divTask.className = "task";
        divTask.id = "task" + taskNumber; 

        var checkTask = document.createElement("input");
        checkTask.type = "checkbox"
        checkTask.id = "checktask" + taskNumber;

        var labelTask = document.createElement("label");
        var labelText = document.createTextNode(newTaskText.value);
        labelTask.appendChild(labelText);
        labelTask.id = "labeltask" + taskNumber;

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
        checkTask.addEventListener("click", function(){
            taskComplete(checkTask.parentElement.id);
        });

        buttonTask.addEventListener("click", function(){
            deleteTask(buttonTask.parentElement.id);
        });

        taskNumber += 1;

        //clear textTask
        newTaskText.value = "";
    }
});
//Función que marca una task como completada.
function taskComplete(id) {

}
//Función que elimina una task que no necesite.
function deleteTask(id) {

}