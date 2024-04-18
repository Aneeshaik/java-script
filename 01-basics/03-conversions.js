let str = "51";
let str1 = "51abc"
let ex = null;
let ex1 = undefined;
let bool = true;
console.log(typeof(str));
let number = Number(str)
console.log(typeof(number));

let number1 = Number(str1); //string can be converted to number type 
console.log(typeof number1); 
console.log(number1); //but it cannot be printed it'll print NaN

let excnvrt = Number(ex);
console.log(excnvrt); //0 will be printed
console.log(typeof excnvrt); //null can be converted to number

let ex1cnvrt = Number(ex1);
console.log(ex1cnvrt); //cannot be printed - NaN
console.log(typeof ex1cnvrt); //can be converted to number like string but cannot be printed

let boolcnvrt = Number(bool);
console.log(boolcnvrt); // 1 will be printed
console.log(typeof boolcnvrt); // bool can be converted to number - true = 1 & false = 0

let boolNum = 1;
let boolNumcnvrt = Boolean(boolNum); //number can also be converted to boolean 1 = true, 0 = false, "" = false, "asd" = true
console.log(boolNumcnvrt);
console.log(typeof boolNumcnvrt);

let strNum = 51;
let strNumcnvrt = String(strNum); //number can be converted to string
console.log(typeof strNumcnvrt); //it can be printed too
console.log(strNumcnvrt);