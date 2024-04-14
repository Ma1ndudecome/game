// const flash = prompt('Input your name')
// alert('My name:' + flash)

// let x, y, z, oper

// x = prompt('First Number')
// y = prompt('Second Number')
// oper = prompt('an operator')
// if(oper == '+'){
//     z = Number(x) + Number(y)
// }
// if(oper== '-'){
//     z = Number(x) - Number(y)
// }
// if(oper== '*'){
//     z = Number(x) * Number(y)
// }
// if(oper== '/'){
//     z = Number(x) / Number(y)
// }

// let x = 6
// console.log(x++)
// console.log(x)
// console.log(x--)
// console.log(x)

// const boolean = true
// const string = 'Ura'
// const number =  35
// let x
// let z = null
// const array =[]
// const obj = {}
// console.log(typeof boolean)
// console.log(typeof string)
// console.log(typeof number)
// console.log(typeof x)
// console.log(typeof z)
// console.log(typeof array)
// console.log(typeof obj)
 

// const color = 'ban123_1372'
// if (color === 'red'){
//     console.log('come on')
// }
// else if (color === 'black'){
//     console.log('come down')
// }
// else{
//     console.log('dude??')
    
// }

// x = prompt('First Number')
// y = prompt('Second Number')
// oper = prompt('an operator')

// if (oper === '+'){
//     z = Number(x) + Number(y)
// }
// else if(oper === '' ){
//     z = 'Error'
// } else if( x == '' ){
//     z = 'Erorr'
// }else if( y == '' ){
//     z = 'Erorr'
// }
// else if(oper === '-'){
//     z = Number(x) - Number(y)
// }
// else if(oper === '*'){
//     z = Number(x) * Number(y)
// }
// else if(oper === '/'){
//     z = Number(x) / Number(y)
// }
// alert('Your num' + z)
// const isready = true

// if(isready == true){
//     console.log('ok')
// }
// else{
//     console.log('error')
// }
//  isready ? console.log('ok') : console.log('error')

// const number = 100
// function onclick(myAge){
//     return number - myAge
// }
// function onclick1(name, lastName){
//     return 'My name is:' + name + lastName
// }
// function info(name, lastName){
//     const age = onclick(85);
//     const Name = onclick1(name, lastName)
//     console.log(age, Name)
// }
// info('Ma1n ', 'Dude')
// const masive = ['1', '2', '3', '4', '5', '6',]

// for ( let i = 0; i < masive.length; i++){
//     console.log(masive[i])
// }
// for (let name of masive){
//     console.log(name)
// }
// const main = {
//     pc: 'normal',
//     headphones: 'logitech G435',
//     mouse: '2',
//     date: 2024,
//     test: 'normal',
//     workspoka:true,
//     eat: function(){
//         console.log('I am going to eat')
//     }
// }
// for (let beit of main.mouse){
//        beit === '2' ? console.log('man'): console.log('come on dude man')
// }












// let time = 13;
// let greeting = time < 12 ? 'Доброе утро' : 'День';
// console.log(greeting)
// let greeting = 'Привет, Как ты?'
// let howAreYou = ' Как ты?'

// let aboutin = greeting + howAreYou;
// console.log(aboutin)

// const name = 'Ura';
// console.log('Hi ' + name + ' How are you dude?')
// console.log(`Привет, ${name}! как дела?`)

 
// function sayHi(){
//     console.log('Privet,Dude');
// }
// sayHi()

// function sayHi(){
//     alert('Привет')
// }
// const sayHi = function(){
//     alert('Привет')
// }


// function change(name){
//     console.log(`Привет, ${name}! Как твои дела?`);
// }
// change('nameesdude')

// function summ(a, b){
//     console.log('Start')
//     const result = a + b
//     return result;
// }
// let res = summ(10,25)
// console.log(res)

// function summ(a, b){
//     return a * b
// }
// function diff(a, b){
//     return a - b
// }

//  function doSomething(func){ //coolback
//    
//     let con = func(10, 15)
//     console.log(con)
//  }
//  doSomething(summ)
//  doSomething(diff)

//                      Immediately invoked function expression Вираз функції, що викликається негайно

// (function sayHi() {
//     console.log('привет друг')
// })();
// let res = (function (a,b){
//     return a + b;
// })(10,10)
// console.log(res)

//                          Стрелочные функции
//defoult
// function sayHi(name){
//     console.log(`Привет, ${name}! Как ты друг?`);
// }
// sayHi('Юра')

//arr

// const arrSayHi = (name) => {
//     console.log(`Привет, ${name}! Как ты друг?`);
// }
// const arrSayHi = (name) => console.log(`Привет, ${name}! Как ты друг?`); 
    

// arrSayHi('Юра')

// function summ(a,b){
//     const result = a + b;
// }

// const summ = (a, b) => a + b;
// const ban = summ(10,30)
// console.log(ban)

//                            Масив
// const auto = ['BMW', 'Ferari', 'Lamborgini', 'Lexus'];
// console.log(auto);
// console.log(auto[0]);
// console.log(auto.length)

// const autеo = ['BMW', 'Ferari', 'Lamborgini', 'Lexus', ['Ban']];//Вложеный масив

//                                 методы масивов
// .push(), .pop(), shift(), unshift(), .splice(), .slice(). forEach(), . infexof(), .includes()
//masive.push(element) - Добавление елемента в конец масива
//masive.pop() - удаить елемент из конца масива
//masive.shift() - удаить елемент из начала масива
//masive.unshift(...element) - Добавить елемент в начало масива
//masive.splice([start]], [deletecound, newelement]) 
// const auto = ['BMW', 'Ferari', 'Lamborgini', 'Lexus'];
// console.log(auto);

// auto.splice(2, 1, 'mazdaxxxx');
// console.log(auto);
//                               цикл for
// console.log('Start');

// function con() {
//     console.log('Proverka');
// }

// for (let i = 1; i < 10; i++) {
//     con();
// }
// const auto = ['BMW', 'Ferari', 'Lamborgini', 'Lexus'];

//  for (i = 0; i < auto.length; i++){
//     console.log(auto[i])
// }
//                     цикл for of
// const auto = ['BMW', 'Ferari', 'Lamborgini', 'Lexus'];
// for (let i of auto)[
//     console.log(i)
// ]
//                       for Each()

// const auto = ['BMW', 'Ferari', 'Lamborgini', 'Lexus'];
// auto.forEach((item, index)=> {console.log(`${item} index ${index}`)})

// function test(item, index){ //first its element from massive, secound its index element from massive(0,1,2,3.lenght)
//     console.log(`${item} index ${index}`)
// }
                     // обєкти

// const aboutMan = {
//     Name: 'Ura',
//     age: 15,
//     isMarried:false,
//     profession:'None'
// }
// console.log(aboutMan.Name)

// let what = 'profession'
// console.log(aboutMan[what])

// aboutMan.whatwant = 'dk'
// console.log(aboutMan)
// delete aboutMan.isMarried
// console.log(aboutMan)
 //                                        методы обєктов

//  const aboutMan = {
//         Name: 'Ura',
//         age: 15,
//         isMarried:false,
//        sayHi: function(){
//         console.log('Привет')
//        }
//     }
// aboutMan.sayHi = function(name){
//     console.log(`Privet ${name}`);
// }    
//this
// const aboutMan = {
//     Name: 'Ura',
//     age: 15,
//     isMarried:false,
//    sayHi: function(name){
//     console.log(`Привет ${name}!меня зовут ${this.Name} `)
//    }
// }
// aboutMan.sayHi('Юрий')
//                                   for in
// const aboutMan = {
//         Name: 'Ura',
//         age: 15,
//         isMarried:false,
//        sayHi: function(name){
//         console.log(`Привет ${name}!меня зовут ${this.Name} `)
//        }  
//     };

// for( let key in aboutMan){
//     console.log(key, ':', aboutMan[key])
// }
//                                           class

// class About{
//     constructor(Name, Home, Car, money){
//         this.Name = Name
//         this.Home = Home
//         this.Car = Car
//         this.money = money
//     }
//     sayHi(name){
//         console.log(`Привет ${name}!меня зовут ${this.Name} `)
//     }
// }
// const Aboutme = new About('Юрий', 'yes', 'No', 'zero',)
// console.log(Aboutme)
// Aboutme.sayHi('Man')

//practice

// document.querySelector('h2').classList.add('red')
//  document.querySelector('.heading-3').classList.add('green')

//  const ban = document.querySelectorAll('h2');

//  for(let item of ban){
//     item.classList.add('red-text')
//  }

// const para = document.querySelectorAll('p')
//  for (let p of para){
//     p.classList.add('green-text')
//  }
// para.forEach(function(p){
//  p.classList.add('green-text')
// })
// const heading = document.getElementById('heading-1');

// console.log(heading);

// heading.classList.add('green');
// const res = heading.classList.toggle('green')


// heading.classList.contains('heading-2')

// const img = document.querySelector('#logo');
// // const pytb = img.getAttribute('src');
// // console.log(pytb)

// img.setAttribute('src', './img/php.png')
// img.setAttribute('width', '200')

// img.src = './img/js.png' 

// const button = document.querySelector('#button')

// button.value = 'НЕ кнопка'
// button.setAttribute('value', 'Не кнопка')

// const button = document.querySelector('#button');
// const img = document.querySelector('#logo');


// button.value = 'Удалить'


// button.addEventListener('click', function(){//best
//     img.remove()
// })

// button.onclick = function(){ //no 
//     alert('ТОчно??')
//     img.setAttribute('src', './img/php.png')
//     img.setAttribute('width', '200')
    
// }

// button1.addEventListener('click', function(){
//     img.setAttribute('src', './img/js.png')
// })
// button.onclick = function(){
//     img.remove()
// }

// const inputs = document.querySelector('#input-text')
// const div = document.querySelector('#text-block')

// inputs.addEventListener('input', function(){
    
//     div.innerText = inputs.value
// });
// const list = document.querySelector('#list');

// list.addEventListener('click', function(event){
    
//     console.log(event.target)
// })
// Создать елемент
// document.createElement('tag-name')
// //изменить HTML содержимое внутири елемента
// element.innerHTML = ''
// //Изменить текстовое содержимое внутри елемента
// node.innerText = ''
// //Клонирование элемента
// .node.cloneNode()//true с внутренним содержимим(текст и теги) false(без внутреннего содержимого)
// //вставить елемент внутрь другого елемента
// element.append(nodesOrDoMsstrings)
// //Удалить елемент
// element.remove()

// создание
// const box = document.querySelector('#elementsContainer')

// const newHeader = document.createElement('h1')
// newHeader.innerText = 'Заголовок друг'
// box.append(newHeader)

// копирование
// const header = document.querySelector('header');
// const copy = header.cloneNode(true )
// box.append(copy)

// вставка разметки через строки
// const htmlEx = '<h2>Привет друг</h2>';
// box.insertAdjacentHTML('beforeend', htmlEx);

// const title = 'Привет дорогой друг'
// const htmlExaple = `<h2>${title}<h2>`
// box.insertAdjacentHTML('beforeend', htmlExaple)
// const Hide = document.querySelector('#hideButton')
// const element = document.querySelector('#elementList')


// Hide.addEventListener('click', propan);

// function propan(){
//     const computedStyle = getComputedStyle(element);
//     if(computedStyle.display === 'none'){
//         element.style.display = 'block';
//     } else {
//         element.style.display = 'none';
//     }
// }
// const input = document.querySelector('#todo-input');
// const button = document.querySelector('#todo-form');
// const list = document.querySelector('#todo-list');


// button.addEventListener('submit', clickAdd)



// // function clickAdd(event){
// //    if(input.value == ''){
// //     event.preventDefault();
// //    }else{
// //     event.preventDefault(); //Отправка форми отменяет
// //     const otpr = input.value; //Получаем название задачи из инпута
// //     const Lilist = `<li>${otpr}</li>`; //создаем тег li через разметку 
// //     list.insertAdjacentHTML('beforeend',  Lilist)//Добавляем разметку на страницу
// //     input.value = ''//Очистка поле в вода
// //     input.focus();
// //    }
    
// // }
// function clickAdd(event){
//     event.preventDefault();
//     const otpr = input.value;
//     const Lilist = document.createElement('li');
//     Lilist.innerText = otpr
//     const deletBtn = document.createElement('button');
//     deletBtn.setAttribute('role', 'button');
//     deletBtn.innerText = 'Удалить'
//     deletBtn.style['mathin-left'] = '15px';
//     Lilist.append(deletBtn)
//     deletBtn.addEventListener('click', function(){
        // this.closest('li').remove();
//     })
   
//     list.append(Lilist); 

//     input.value = ''; 
//     input.focus(); 
// }
  


// //создание
// // const box = document.querySelector('#elementsContainer')
// // const newHeader = document.createElement('h1')
// // newHeader.innerText = 'Заголовок друг'
// // box.append(newHeader)


// //вставка разметки через строки
// // const htmlEx = '<h2>Привет друг</h2>';
// // box.insertAdjacentHTML('beforeend', htmlEx);

// // const title = 'Привет дорогой друг'
// // const htmlExaple = `<h2>${title}<h2>`
// // box.insertAdjacentHTML('beforeend', htmlExaple)
// const Hide = document.querySelector('#hideButton')
// const element = document.querySelector('#elementList')


// Hide.addEventListener('click', propan);

// function propan(){
//     const computedStyle = getComputedStyle(element);
//     if(computedStyle.display === 'none'){
//         element.style.display = 'block';
//     } else {
//         element.style.display = 'none';
//     }
// }

// interval
// const inretval = setInterval(function(){
//     console.log('Привет друг!')
// }, 1000);

// const inter = setInterval(function(){
//     clearInterval(inretval)
// }, 10000)
//  setTimeOut

// const inretval = setInterval(function(){
//     console.log('Привет друг!')
// }, 1000);

// const inter = setInterval(function(){
   
// }, 10000)
// clearInterval(inretval)

// setTimeout(function(){
//    alert('Diedude')
// }, 3000)

// const count = document.querySelector('#counter')
// let counter = 0;
// const start = document.querySelector('#start');
// const pause = document.querySelector('#pause');
// const reset = document.querySelector('#reset');

// start.addEventListener('click', function(){
//     inter = setInterval(function(){
//         counter++;
//         count.innerText = counter;
//     },1000)
// });
// pause.addEventListener('click', function(){
//     clearInterval(inter);
// })
// reset.addEventListener('click', function(){
//     counter = 0; 
//     count.innerText = counter;
//     clearInterval(inter);
// });

// zadacha

// let inerval = 0

// const test = setInterval(function(){
//     inerval++
//     console.log(inerval)
// },1000)
 

// const set = setTimeout(function(){
//     clearInterval(test);
//     console.log('Готово')
// },10000)

// const input = document.querySelector('#input-pol');
// const resultbutton = document.querySelector('#resultbutton');
// const result = document.querySelector('#result');

// resultbutton.addEventListener('click', function(){
//     if(input.value === ''){
//        error.style.display = 'block'
//     }else{
//        const ban = ((Number(input.value) - 32) * 5)/9
//         result.textContent = ban;
//         error.style.display = 'none'
//     }
   
// });


// const MyPromise = new Promise(function(append, diss){
//     console.log('Start')
//     setTimeout(function(){
//        console.log('Запрос на сервер...')
//        const zapr = true;
//        if(zapr){
//         let message = 'Успех!'
//         append(message);
//        }else{
//         let message = 'Провал(!'
//         diss(message);
//        }
//     },2000)
    
// })

// MyPromise.then(function(dates){
//     return new Promise(function(append, diss){
//         setTimeout(function(){
//             console.log('Запрос отправлен');
//             console.log(dates);
//             const response = true;
//             if(response){
//                 append('Logich from then 1')
//             }else(
//                 diss('diss Logich from then 1')
//             )
//            },1000)
//     })
// }).then(function(data){
//    setTimeout(() => {
//     console.log('Что-то не так...');
//     console.log
//    }, 500);
// }).catch(function(dates){
//     console.log('Запрос отправлен');
//     console.log(dates)
    
// })




// check()
//     .then(checktickets)
//     .then(fly)
//     .catch(stay)

// function check(){
//     return new Promise(function(nice, notn){
//         setTimeout(function(){
//             console.log('Проверяем номера в отеле....');
//             let answer = true;
//             if(answer){
//                 nice('Номера есть');
//             }else{
//                 notn('Номеров нету');
//             }
//         },1500)
//     })
// }

// function checktickets(data){
//     return new Promise(function(nice, notn){
//         setTimeout(() => {
//             console.log(data)
//             console.log('Проверяем билеты....')
//             const bulets = true;
//             if(bulets){
//                 let message = 'Билеты есть';
//                 nice(message)
//             }else{
//                 let message = 'Билеты тютю';
//                 notn(message)
//             }
//         },1500)
//     });
// }
// function stay(datas){
//     console.log('Проверка....')
//     console.log(datas)
//     console.log('Остаемся дома')
// }
// function fly(datas){
//     console.log(datas)
//     console.log('Взлетаем..')
// }



