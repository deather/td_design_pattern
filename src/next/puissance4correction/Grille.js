import {Case} from './Case.js';
import {Jeton} from './Jeton.js';
import {Iterator} from './Iterator.js';

export class Grille {
	constructor() {
		this.cases = [];

		for (let i = 0; i < 6; i++) {
			this.cases.push([]);

			for (let j = 0; j < 7; j++) {
				this.cases[i][j] = new Case(i, j, null);
			}
		}
	}

	setCase(line, column, value) {
		this.cases[line][column].jeton = new Jeton(value);
	}

	iterator() {
		return new Iterator(this);
	}
}
