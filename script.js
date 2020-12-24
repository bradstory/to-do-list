const toDo = document.getElementById('input')
const listItems = document.getElementById('items') 
const closeBtn = document.getElementById('cross')


function addToList() {
    if(toDo.value == ""|| toDo.value == null) {
        alert('Please input something')
    } else {
        const item = document.createElement('div')
        item.classList.add('toDoItem')
        item.innerHTML = `<span id="contentWrap">${toDo.value}</span> <span id="cross" onclick="removeItem(event)">&cross;</span>`;
        listItems.append(item)
        toDo.value = ""
        closeBtn.addEventListener('click', removeItem)
}
}

function removeItem(e) {
    e.target.parentElement.remove()
}

toDo.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("submit").click();
    }
  })