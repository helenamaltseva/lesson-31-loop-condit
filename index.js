const age = prompt("56");
if (age >= 0 && age <= 11) {
    console.log("Дитина");
} else if (age >= 12 && age <= 17) {
    console.log("Підліток");
} else if (age >= 18 && age <= 59) {
    console.log("Дорослий");
} else if (age >= 60) {
    console.log("Пенсіонер");
} else {
    console.log("Невірно");
}



// const number = prompt("8");
// const symbols = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];
// if (number >= 0 && number <= 9) {
//     console.log("Спецсимвол для числа " + number + " - " + symbols[number]);
// } else {
//     console.log("Невірно");
// }



// const start = parseInt(prompt("1"));
// const end = parseInt(prompt("9"));

// if (isNaN(start) || isNaN(end) || start >= end) {
//   console.log("Невірно");
// } else {
//   let sum = 0;
  
//   for (let index = start; index <= end; index++) {
//     sum += index;
//   }
//   const rezult = ("Сума всіх чисел в діапазоні від " + start + " до " + end + " дорівнює: " + sum);
//   console.log(rezult);
// }



// const num1 = 15;
// const num2 = 45;
// function findGCD(a, b) {
//   while (b !== 0) {
//     const remainder = a % b;
//     a = b;
//     b = remainder;
//   }
//   return a;
// }
// const result = findGCD(num1, num2);
// console.log(result);



// const num = parseInt(prompt("21"));

// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }







