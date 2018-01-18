import {Entrepot} from './core/Entrepot.js';
import {Produit} from './core/Produit.js';
import {Client} from './core/Client.js';

Entrepot.get().addProduit(new Produit('Kirin Ichiban', 1));

let client = new Client();

console.log(Entrepot.get().getProduits());
console.log(client.retire(2));
console.log(Entrepot.get().getProduits());
console.log(client.retire(1));
console.log(Entrepot.get().getProduits());
