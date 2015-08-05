//variable declarations.get HTML elements and id and set them to a variable
var newTaskHolder = document.getElementById("new-task");
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completeTaskHolder = document.getElementById("completed-tasks");
var addButtonHolder = document.getElementsByTagName("button")[0];


//function declarations

//creating a new task list
var createNewTaskElement = function(taskString){
   var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");
  checkBox.type = "checkbox";
  editInput.type = "text";
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  label.innerText = taskString;
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  
    return listItem;

};
//add task
var addTask = function(){
	var listItem = createNewTaskElement(newTaskHolder.value);
	incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
    newTaskHolder.value = "";

};
//delete task
var deleteTask = function(){
	var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
};
//edit task
var editTask = function(){
	  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type = text]");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
  if(containsClass){
  label.innerText = editInput.value;
  }else{
  editInput.value = label.innerText;
  };
  listItem.classList.toggle("editMode");
}
	


//to mark a task as complete
var taskCompleted = function(){

	var listItem = this.parentNode;
	completeTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,taskIncomplete);

};
//to mark a task as incomplete

var taskIncomplete = function(){
	var listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,taskCompleted);
};
//bind list items
var bindTaskEvents = function(taskListItem,checkBoxEventHandler){

var checkBox = taskListItem.querySelector("input[type=checkbox]");
var editButton = taskListItem.querySelector("button.edit");
var deleteButton = taskListItem.querySelector("button.delete");

//binding variable values to functions


 checkBox.onchange = checkBoxEventHandler;
 editButton.onclick = editTask;
 deleteButton.onclick = deleteTask;

};

addButtonHolder.onclick = addTask;


//looping through the incomplete taskholder and complete task holder

for(var i = 0; i < completeTaskHolder.children.length; i++){

	bindTaskEvents(completeTaskHolder.children[i],taskIncomplete);
};
for(var i = 0; i < incompleteTaskHolder.children.length; i++){

	bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
};


























