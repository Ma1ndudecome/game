let time = 20
let Inter
const input = document.getElementById('input');
const vivod = document.getElementById('vivod');
const button = document.getElementById('button');
const update = document.getElementById('update');
const timer = document.getElementById('timer');

button.addEventListener('click', Check);
update.addEventListener('click', updates);
number = Math.floor(Math.random() * 100) + 1;
console.log(number)

function updates(){
    number = Math.floor(Math.random() * 100) + 1;
    console.log(number)
    vivod.innerText = 'Подсчёт'
    input.value = ''
    time = 20; 
    timer.innerText = time; 
    clearInterval(Inter)
}

function Check(){
    const inputValue = parseInt(input.value);
    if(time === 20){
        Inter = setInterval(function(){
            time--
            timer.innerText = time
    
            if(time === 0){
                clearInterval(Inter)
                input.value = ''
                vivod.innerText = 'Проиграл!'
            } 
        },1000)
       }
    if(inputValue === number){
        vivod.innerText = 'угадал, Поздравляю!!!'
        clearInterval(Inter);
    }else if(inputValue < number){
        vivod.innerText = 'Напиши число больше'
    }else if (inputValue > number){
        vivod.innerText = 'Напиши число меньше'
    }
    if(inputValue > 100){
        vivod.innerText = 'Число не может быть больше 100'
    }
   
}




