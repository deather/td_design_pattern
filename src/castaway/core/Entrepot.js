let idInstance = 0;
let instance = null;

export class Entrepot {
	constructor() {
		this.id = ++idInstance;
		this.produits = [];
	}

	static get() {
		if (instance === null) {
			instance = new Entrepot();
		}

		return instance;
	}

	getProduit(id) {
		let produit = null;

		for (let i = 0; i < this.produits.length; i++) {
			if (this.produits[i].id === id){
				produit = this.produits[i];
				this.produits.splice(i, 1);
			}
		}


		return produit;
	}

	addProduit(p) {
		this.produits.push(p);
	}

	getProduits() {
		return this.produits;
	}
}
