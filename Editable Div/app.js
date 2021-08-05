console.log("hello ");

let divElem = document.createElement('div');
let text = document.createTextNode('This is my element. Click to Edit it.');
divElem.appendChild(text)
divElem.setAttribute("id","Elem");
divElem.setAttribute("style","border:2px solid black; width: 154px; margin:34px padding:23px");
let container = document.querySelector('.container');
let first = document.getElementById("first");

//insert the element
container.insertBefore(divElem,first);

//console.log(divElem,container);

divElem.addEventListener("click",function(){
        let html = Elem.innerHTML;
        divElem.innerHTML = `<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea">${html}</textarea>`;;
});