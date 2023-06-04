// javascript comment
/* javascript: Java compile, Javascript runtime

*/
/* 
 0. install nodejs 
 1. khong xai var trong JS */
// var res = 10;
let value = 10;
console.log(typeof value);
const value1 = 10;

value = "10"; // value = "10"; value = `10`;
console.log(typeof value);
//'string', "string", `string${value1}`
const result = value + value1;
console.log("result", result);

/// 2. compare value in JS
// == compare value (parse gia tri 2 element trong condition)
// === compare value & type
if (value == value1) {
  console.log("equal ne");
}

if (value === value1) {
  console.log("equal ne");
} else {
  console.log("not equal ne");
}

// data type of JS nguyen thuy (primitive) 6 kieu
// 1. number, 2. boolean, 3. string, 4. null, 5. Symbol, 6. undefined
// null vs undefined
// case undefined
let a;
let object = {};
console.log(typeof a);
console.log(typeof object.a);

// null -> 1 object
let b = null;
console.log(typeof b);

if (!!b) {
  // !!b = Boolean(b) if (b != null && b != undefined) ---> if (!!b) short boolean
  console.log("not null");
} else {
  console.log("null");
}

// 4. Array const arr = ["string", 1, 2, "value"];
const arr = [1, 2, 3, 4];
console.log("arr", arr);

// loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((item) => {
  console.log(item);
});
// arr.for
let i = 0;
while (true) {
  console.log("value of i", i);
  if (i === 4) {
    break;
  }
  i++;
}

// regular function vs arrow function
function handlePlus(a, b) {
  return a + b;
}

const handlePlusArrow = (a, b) => a + b;

// a & b: number
// func: function
const todoSomething = (a, b, func) => {
  const result = func(a, b);
  console.log("result", result);
  // return result;
};

todoSomething(10, 20, handlePlusArrow);

// string method
let string = "this is string";
string = string.replace(" ", "-");
const arrString = string.split(" ");
console.log("arrString", arrString);
const stringResult = arrString.join(" ");
console.log(stringResult);

// object

// callback la gi?
// promise la gi?
// async await la gi?
