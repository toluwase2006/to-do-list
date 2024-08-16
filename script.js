const list = document.querySelector('#tasklist');
//delete task
list.addEventListener('click', (e) => {
    if(e.target.className == "delete"){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})
//
const addForm = document.forms['add'];

addForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value
    // creating Element
    const li = document.createElement("li")
    const taskName =document.createElement("p")
    const deleteBtn = document.createElement("button")
   
    // append to dom
    li.appendChild(taskName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
     // add content
    deleteBtn.textContent = "delete";
    taskName.textContent = value;
    // add Classes
    deleteBtn.classList.add("delete")

   

   
})
const dem = document.getElementById("demo");

const searchBar = document.forms["search_task"].querySelector('input');
searchBar.addEventListener('keyup', (e) =>{
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = "block";
        } else{
            book.style.display = "none";
            dem.innerHTML = "NOT-FOUND"
        }
    })
})
    