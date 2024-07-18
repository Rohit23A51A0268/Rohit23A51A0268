
/*To - Do List webpage (responsive for both desktops and mobile phones)*/

/*This is a  JavaScript file through which the entire website will get alive*/


/* assigning the text entered in 'Add your plan'*/
const inputBox = document.getElementById("input-box");

/*assign*/
const listContainer = document.getElementById("list-container");

/* a funcion call to check the user texted anything? or the taks exceeded 15? or we need to insert the text in 'li'*/
function addTask(){


  const listItems = listContainer.getElementsByTagName("li");

  if(inputBox.value === ''){
    alert("You should enter any task!");
    
  }
  else if (listItems.length >= 15) {
    alert("You have reached the limit of 15 tasks. Please delete some tasks before adding new ones.");
  } 

  else{
  
   let li = document.createElement("li");
   // Create a span to hold the task text
   const taskSpan = document.createElement('span');
   taskSpan.textContent = inputBox.value;
   li.appendChild(taskSpan);
    
    // Create a delete icon
  const deleteIcon = document.createElement("span");
  deleteIcon.classList.add('delete-icon');
  deleteIcon.innerHTML = '<img src="delete.png" alt="Delete">';
  li.appendChild(deleteIcon);

  //Creat a edit icon
  const editIcon = document.createElement("span");
  editIcon. classList.add('edit-icon');
  editIcon.innerHTML = '<img src="edit.png" alt="Edit">';
  li.appendChild(editIcon);

  // Append the list item to the task list
  listContainer.appendChild(li);
  }

inputBox.value = "";
storeData();
}

// To toggle the list by cliking (to check and unheck)
listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI" || e.target.tagName === "SPAN" && !e.target.classList.contains('delete-icon') && ! e.target.classList.contains('edit-icon')) {
      e.target.classList.toggle("checked");
      storeData();
  } 

  // To remove the text on cliking the delete icon
  else if (e.target.tagName === "IMG" && e.target.parentElement.classList.contains('delete-icon')) {
      e.target.closest('li').remove();
      storeData();
  }

  // To edit the text 
  else if (e.target.tagName === "IMG" && e.target.parentElement.classList.contains('edit-icon')){

    const li = e.target.closest('li');
        const taskSpan = li.querySelector('span');
        
        const newText = prompt("Edit your task:", taskSpan.textContent);
        if (newText !== null && newText.trim() !== "") {
            
          taskSpan.textContent = newText;
        }
        storeData();
  }

 
}, false);


// Function created to store data which can also available after refreshing the page 
function storeData(){
  localStorage.setItem("memory", listContainer.innerHTML);

}

// A function that stores data which can also available after refreshing the page 
function savedTask(){
   if (localStorage.getItem("memory")) {
    listContainer.innerHTML = localStorage.getItem("memory");
  }
}
savedTask();
