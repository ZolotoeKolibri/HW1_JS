// Задание 1
let a = 10;
let x = a * 3;
let y = a + x;
console.log (a, x, y);

// Задание 2
let firstName = prompt ("First name", "" );
let lastName = prompt ("Last name", "" );
alert ("What\'s up " + " " + firstName + " " + lastName );

// Задание 3
let x = +prompt ("Введите x", "" );
let y = +prompt ("Введите y", "" );
alert ( "Произведение чисел: " + (x*y) + "\n" +
    "Частное чисел: " + (x/y) + "\n" +
    "Разность чисел: " + (x-y) + "\n" +
    "Сумма чисел: " + (x+y) );

// Задание 4
let hours  = +prompt ("Введите количество рабочих часов", "" );
let day = +prompt ("Введите количество рабочих дней", "" );
let rate = +prompt ("Введите рейт за час", "" );
let salary = (((rate * hours) * day) * 4);
alert ( "Ваша зарплата составляет: " + salary ) ;

// Задание 5
let a = +prompt ( "Введите число", "");
if ( (a%2)!==0){
    alert (" Число нечетное"); }
else {
    alert ("Число четное");}

// Задание 6
let a = prompt ("Введите строку", "" );
if (isNaN(a)) {
    alert ( "Строка не является числом" ); }
else {
    alert ( "Строка является числом" ); }

// Задание 7
let a = Math.round(Math.random()*100);
let b = prompt ("Введите второе число", "" );
if (a > b ){
    alert (" Первое число больше второго" + "\n" +
        "Первое число равно " + a + "\n" +
        "Второе число равно " + b); }
else {
    alert ("Первое число меньше второго"+ "\n" +
        "Первое число равно " + a + "\n" +
        "Второе число равно " + b); }

// Задание 8
let str = prompt ("Введите предложение", "" );
let str2 = prompt ("Укажите, то что вам нравится изучать", "" );
let str3 = "Мне нравится изучать" ;
let result = ""
if ( str.indexOf(str2)!== -1){
    result = result + ("Cовпадения есть ")+ "\n"; }
else {
    result = result +("Совпадений нет") + "\n";}
result = result + `${str3} ${str2}`+ "\n";
alert(result);