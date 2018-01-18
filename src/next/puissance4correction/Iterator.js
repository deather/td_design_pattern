export class Iterator {
	constructor(grille) {
		this.grille = grille;
		this.currentLine = 0;
		this.currentColumn = -1;
	}

	next() {
		if (this.currentLine === 5 && this.currentColumn === 6) {
			return null;
		}

		if (this.currentColumn === 6) {
			this.currentLine++;
			this.currentColumn = 0;
		}
		else {
			this.currentColumn++;
		}

		return this.grille.cases[this.currentLine][this.currentColumn];
	}
}
