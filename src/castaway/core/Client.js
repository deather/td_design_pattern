import {Entrepot} from './Entrepot.js';

export class Client {
	constructor(nom) {
		this.nom = nom;
	}

	retire(idProduit) {
		return Entrepot.get().getProduit(idProduit);
	}
}
