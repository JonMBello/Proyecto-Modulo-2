//Función que crea la maqueta
function initTodoApp() {
    //Code goes here
}
initTodoApp();

//Función que agrega nuevas tasks a la lista.
function newTask() {
    //Code goes here
}
//Función que marca una task como completada.
function taskComplete(id) {
    var label = document.getElementById(`labelTask${id}`);
    var checkBox = document.getElementById(`checkTask${id}`);

    if (checkBox.checked == true){
        label.style.textDecoration = "line-through";
        label.style.color = "green";
      } else {
        label.style.textDecoration = "";
        label.style.color = "black";
      }
}
//Función que elimina una task que no necesite.
function deleteTask(id) {
    //Code goes here
}