/*
F12 에서 문자열은 까만색, 숫자는 파란색으로 표현됨
*/



let num = '3.14';
console.log(num);

// 1. 문자 -> 실수 : parseFloat(값)
console.log('문자 -> 실수 :',parseFloat(num));

// 2. 문자 -> 정수 : parseInt(값)
console.log('문자 -> 정수 :', parseInt(num));

// 3. 문자 -> 숫자 : Number(값)
let num2 = '5';
console.log('문자 -> 숫자 :', Number(num));
console.log('문자 -> 숫자 :', Number(num2));

// 4. 숫자 -> 문자 : String(값)
let num3 = 100;
console.log('숫자 -> 문자 :', String(num3));

