// const btnDecrease = document.querySelector('.decrease');
//const btnReset = document.querySelector('.reset');
// const btnIncrease = document.querySelector('.increase');
// const count = 0;
// btnDecrease.addEventListener('click',function(){
//      count = count-1;
//      document.getElementById('value').innerText = count;  
// });

// btnReset.addEventListener('click',function(){
//     document.getElementById("value").innerText=0;
// });

// btnIncrease.addEventListener('click',function(){
//     console.log('i got clicked');
// });

let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    //console.log(btn);

    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase'))
        {
            count++;
        }else{
            count=0;
        }
        if(count>0){
            value.style.color = 'blue';
        }else if(count<0){
            value.style.color = 'Red';
        }else{
            value.style.color = 'black';
        }
        value.textContent = count;

        
    });
});