//Función que crea la maqueta
function initTodoApp() {
    //Code goes here
}
initTodoApp();

//Función que agrega nuevas tasks a la lista.

let taskNumber = 0;
var taskContainer = document.createElement("div");
taskContainer.className = "task-container"

var mainContainer = document.getElementById("app");
var newTaskText = document.querySelector("input");


//Creación de la tabla 

var table = document.createElement('table');
table.className = 'striped cyan lighten-1 centered cols10s';
table.style = 'width: 539px; margin-left: 231px;';

var thead = document.createElement('thead');
var trThead = document.createElement('tr');
var thThead = document.createElement('th');
var thTheadtext = document.createTextNode("Tareas por hacer");
thThead.appendChild(thTheadtext);

trThead.appendChild(thThead);
thead.appendChild(trThead);
table.appendChild(thead);
mainContainer.appendChild(table);



var tbody = document.createElement('tbody');



document.querySelector("button").addEventListener("click", function(event){
    event.preventDefault();
    value = taskNumber;
    if(newTaskText.value != ""){
        
        
        
        var trTask = document.createElement('tr');
        trTask.className = "task"
        trTask.id = "task" + taskNumber;
        

        var td = document.createElement('td');
        var p = document.createElement('p');

        var label = document.createElement('label');

        var checkTask = document.createElement("input");
        checkTask.type = "checkbox"
        checkTask.id = "checktask" + taskNumber;

        var spanTask = document.createElement("span");
        var spanText = document.createTextNode(newTaskText.value);
        spanTask.style = "font-family: Arial, Helvetica; color:black;"
        spanTask.appendChild(spanText);
        
        spanTask.id = "spantask" + taskNumber;

        var buttonTask = document.createElement("button");
        buttonTask.id = "deleteButton" + taskNumber;
        buttonTask.className = "btn light darken-4"
        buttonTask.style = "margin-left: 20px";
        

        var i = document.createElement('i');
        i.className = "material-icons"
        var itext = document.createTextNode('delete');
        i.appendChild(itext);
        i.className = "material-icons"
       
        
        
        
        tbody.appendChild(trTask);
        trTask.appendChild(td);
        td.appendChild(p);
        p.appendChild(label);
        label.appendChild(checkTask);
        label.appendChild(spanTask);
        spanTask.appendChild(buttonTask);
        buttonTask.appendChild(i);
        table.appendChild(tbody);
        
        
        
        
        
        

        //adding events
        checkTask.addEventListener("click", function(){
            taskComplete(trTask.id);
        });

        buttonTask.addEventListener("click", function(){
            deleteTask(trTask.id);

        });

        taskNumber += 1;

        //clear textTask
        newTaskText.value = "";
    }
});



//Función que marca una task como completada.
function taskComplete(id) {
    console.log(id);
    var span = document.getElementById(`span${id}`);
    var checkBox = document.getElementById(`check${id}`);

    if (checkBox.checked == true){
        span.style.textDecoration = "line-through";
        span.style.color = "green";
      } else {
        span.style.textDecoration = "";
        span.style.color = "black";
      }
}

//Función que elimina una task que no necesite.
function deleteTask(id) {
    let td = document.getElementById(id);
    console.log(td);
    td.remove();
   
    //Code goes here
}