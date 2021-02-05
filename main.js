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
    //Code goes here
}
//Función que elimina una task que no necesite.
function deleteTask(id) {
    let task = document.getElementById(`task${id}`);
    task.remove();
}