
//Declaracion y definicion de variables

const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const dominio = [".com", ".es", ".net"]

//variable que alojara la combinacion de los arrays
const itemConcatenados = [];

//Un for por cada array para que lo recorra por completo. Cada vuelta del for arrojara un item del array.

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let a = 0; a < dominio.length; a++) { //con .push lo que hago es formar la concatenacion
        itemConcatenados.push(pronoun[i] + adj[j] + noun[k] + dominio[a]);
      }
    }
  }
}

console.log(itemConcatenados);




