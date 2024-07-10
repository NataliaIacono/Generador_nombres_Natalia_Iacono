
//Declaracion y definicion de variables

const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const dominio = [".com", ".es", ".net"]

//variable que alojara la combinacion de los arrays
const itemConcatenados = [];

//Un for por cada array para que lo recorra por completo. Cada vuelta del for arrojara un item del array.

for (let i = 0; i < pronoun.length; i++) { //the //our
  for (let j = 0; j < adj.length; j++) { //great //big
    for (let k = 0; k < noun.length; k++) { // jogger //raccon
      for (let a = 0; a < dominio.length; a++) { //con .push lo que hago es formar la concatenacion // .com 
        itemConcatenados.push(pronoun[i] + adj[j] + noun[k] + dominio[a]);
      }
    }
  }
}

console.log(itemConcatenados);




