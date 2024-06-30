const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');
let placeholder = document.createElement('span');

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes()

function updateStorage(){
    localStorage.setItem('notes',notesContainer.innerHTML);
}

createBtn.addEventListener('click' ,()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    placeholder.className = 'placeholder';
placeholder.innerText = 'Enter your notes here...';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = "./Assets/Images/delete.png"
notesContainer.appendChild(inputBox).appendChild(img);
inputBox.appendChild(placeholder);
})

notesContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'IMG' ){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === 'P' ){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    }
})

document.addEventListener('keydown',event=>{
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault()
    }
})