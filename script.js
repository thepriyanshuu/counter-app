const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const countText = document.querySelector('#count');
const reset = document.querySelector('#reset');
const input = document.querySelector('#input');

let sum = 0
let changedValue = 1
console.log(changedValue);

increase.addEventListener('click', ()=>{   
    sum += parseInt(changedValue)
    countText.innerText = sum
})
decrease.addEventListener('click', ()=>{
    sum -= parseInt(changedValue)
    countText.innerText = sum
})
reset.addEventListener('click', ()=>{
    sum = 0
    countText.innerText = sum
})

input.addEventListener('change', (e)=>{
    changedValue = e.target.value
    console.log(changedValue);
    
})





