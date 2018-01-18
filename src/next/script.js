import {Grille} from './puissance4/Grille.js';

let grille = new Grille();

grille.setCase(0, 1, "R");
grille.setCase(5, 3, "J");

console.log(grille);

//let iterator = grille.iterator();
//let c = iterator.next();
//
//while (c != null) {
//	console.log(c.value);
//	c = iterator.next();
//}
