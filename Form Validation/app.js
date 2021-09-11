console.log("hello");

const name1 = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validName = false;
let validEmail = false;
let validPhone= false;


// console.log(name1,email,phone);

// const submitBtn = document.getElementById('btn');

name1.addEventListener('blur', ()=>{
    console.log("Name is Blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-z]){2,10}$/;
    str = name1.value;
    // console.log(regex,str);
    validName = regex.test(str);
    if (regex.test(str)) {
         //console.log("it Matched");
         name1.classList.remove('is-invalid');
         name1.classList.add('is-valid');
    }else{
        //console.log("no match");
        name1.classList.add('is-invalid');
    }
});

email.addEventListener('blur', ()=>{
    console.log("Email is Blurred");
    let regex = /^([a-z0-9]+)@([a-z0-9]+)\.([a-z]){2,7}$/;
    str = email.value;
    // console.log(regex,str);
    validEmail = regex.test(str); 
    if (regex.test(str)) {
        //  console.log("it Matched");
         email.classList.remove('is-invalid');
         email.classList.add('is-valid');
    }else{
        //console.log("no match");
        email.classList.add('is-invalid');
    }
});

phone.addEventListener('blur', ()=>{
    console.log("Phone is Blurred");
    let regex = /^([0-9]){10}$/;
    str = phone.value;
    // console.log(regex,str);
    validPhone = regex.test(str);
    if (regex.test(str)) {
         //console.log("it Matched");
         phone.classList.remove('is-invalid');
         phone.classList.add('is-valid');
    }else{
        //console.log("no match");
        phone.classList.add('is-invalid');
    }
});


const submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log("clicked");
    if (validName && validEmail && validPhone) {
        // console.log(validName,validPhone,validEmail);
    const success = document.getElementById('success');
    success.classList.add('show');
    success.classList.add('alert-success');
    success.innerHTML = `You form has been <strong>Successfully</strong>  Submitted
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
    }else{
        const danger = document.getElementById('success');
        danger.classList.add('show');
        danger.classList.add('alert-danger');
        danger.innerHTML = `<strong>Try</strong> to correct the fields
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
    }
    
    setTimeout(() => {
        success.classList.remove('show');
    }, 3000);
})
