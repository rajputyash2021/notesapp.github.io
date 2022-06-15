

// function for showing Previous notes on loading the page on your browser
showNotes();



let addNotes = document.getElementById('add_btn');
let saveNotes = document.getElementById('input_btn');
let openPage = document.querySelector('.whole_page');
console.log(openPage);





addNotes.addEventListener("click", openBlock);

function openBlock() {
    openPage.style.display = "block";
}


// fucntion to accept input and and set local storage


saveNotes.addEventListener("click", oBlock);
function oBlock() {
    let input = document.getElementById("take_input");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(input.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    input.value = "";

    showNotes();
    openPage.style.display = "none";
}

// function to show notes on frontend 

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div class="card" ;>
        <div class="card-body">
          <h5 class="card-title">${"Note:" + index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote()" class="btn btn-primary">Delete Note</button>
        </div>
      </div>` ;
    });
    let content = document.getElementById('main_content');
    if (notesobj.length != 0) {
        content.innerHTML = html;

    }
    else {
        content.innerHTML = "Hello There is no note Submitted Yet";
    }


}


//function to delete note from  frontend as well as from local storage
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}