/*
Use a for...of loop to concatenate all the elements of an array into a single string.
*/

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let concat = "";
for(num of numbers) {
   concat += num;
}
console.log(concat)

