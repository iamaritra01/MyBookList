// create a class library and implement the following :
console.log("hello");
/* class library{
    constructor(givenBookList){
        this.bookList = givenBookList;
    }

} */
//constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//display Constructor
function Display() {

}

//Add methods to display Prototype
Display.prototype.add = function(book){
    console.log("Add to ui");
    tableBody = document.getElementById("tableBody");
  let html;
  html = `
  <tr>
  <td>${book.name}</td>
  <td>${book.author}</td>
  <td>${book.type}</td>
</tr>
  `
  tableBody.innerHTML += html;
   
}
Display.prototype.clear = function(){  
 let libraryForm = document.getElementById("LibraryForm");
 libraryForm.reset();
}


//add submit eventListener to form
let libraryForm = document.getElementById("LibraryForm");
libraryForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("authorName").value;

  let fiction = document.getElementById("Fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  /*  console.log(book);  */
  
  let display = new Display();
  display.add(book);
  display.clear();
});
