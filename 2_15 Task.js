//Задача 1
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
//Будет ли эта функция работать как-то иначе, если убрать else?
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
//обе функции работает одинаково

//Задача 2
//Перепишите функцию, используя оператор '?' или '||'
//?
function checkAge(age) {
  return (age > 18)? true: confirm('Родители разрешили?');
}

// ||
function checkAge(age) {
  return ((age > 18)||confirm('Родители разрешили?'));
}

//Задача 3
//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b
function min (a, b) {
return (a > b) ? a: b;
} 

//Задача 4
//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
let x = +prompt("Enter a number", "");
let n = +prompt("Enter a degree", ""); 
function pow(x, n) {
let result = x;
for(let i=1; i<n; i++){
result = result*x;
}
return result;
}
alert ( pow(x, n) );
