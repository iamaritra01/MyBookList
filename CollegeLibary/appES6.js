class BOOK {
    constructor(name,author,type){
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display{
    add(book){
   let tableBody = document.getElementById("tableBody");
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

    clear(){
        let libraryForm = document.getElementById("LibraryForm");
        libraryForm.reset();
    }
   
    validate(book){
        if(book.name.length < 2 || book.author.length<2)
        {
          return false;
        }   
        else{
          return true;
        }
    }
    show(type,message){
        let alertMessage = document.getElementById('message');
    //console.log(alertMessage);
    alertMessage.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message : </strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>`;

    setTimeout(() => {
      alertMessage.innerHTML = ' ';
    }, 2000);
    }
}

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
  let book = new BOOK(name, author, type);
  /*  console.log(book);  */
  
  let display = new Display();
  if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('success',' Your Book has been Added Successfully!');
  }
   else{
       display.show('danger',' Sorry! You cannot Add Book');
   }
});