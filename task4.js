/*
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
*/


const statement = 'I am a hard working person'.split(" ");

let reversed_word = " "; 

for(let i = statement.length-1; i >= 0; i--) {
  reversed_word =  reversed_word+ " " + statement[i]
}
console.log(reversed_word)
