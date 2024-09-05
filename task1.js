/*Write a JavaScript code to reverse the array colors without using the reverse method.
*/


const colors = ['red', 'blue', 'green', 'yellow', 'orange']; 

let rev_colors = [];

for(let i = 0; i < colors.length; i++) {
  rev_colors.unshift(colors[i]);
}

console.log(rev_colors)

