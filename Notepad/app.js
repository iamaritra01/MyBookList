// console.log("this is app.js");
//if user add a note to the localstorage
showNotes();
let addBtn = document.getElementById("addBtn");
//console.log(addBtn);
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addText");
  let addTitle = document.getElementById("addTitle");
  //console.log(addTxt.value);
  let notes = localStorage.getItem("notes");
  notesObj = [];
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let myObj = {
     title: addTitle.value,
     text: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  console.log(notesObj);
  showNotes();
});

// let addBtn = document.getElementById("addBtn");
// //console.log(addBtn);
// addBtn.addEventListener("click", function(e) {
//   let addTxt = document.getElementById('addTxt');
//   let notes = localStorage.getItem("notes");
//   const notesObj = [];
//   //console.log(notes);
//   if (notes == null) {
//     //notesObj = [];
//     //notesObj = JSON.parse(notes);
//     notesObj.unshift(addTxt.value);
//     console.log(notesObj);
//   }

// } else {

// }
//console.log(notesObj);
//notesObj = Object.entries(notesObj);

// localStorage.setItem("notes", JSON.stringify(notesObj));
// addTxt.value = "";
// console.log(notesObj);
//showNotes();
// });

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
          <div class="card noteCard mx-2 my-3" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p id="noteText" class="card-text">${element.text}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
              </div>
            </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

//function to delete note.

function deleteNote(index) {
  //console.log("i am deleting");

  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  //console.log("input");
  let inputVal = search.value.toLowerCase();
  let notesCard = document.getElementsByClassName("noteCard");
  Array.from(notesCard).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

/* Further Features 
1. add title
2. mark a note as important
3. separate notes by user
*/
