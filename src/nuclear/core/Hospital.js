import {Actor} from './Actor.js';

export class Hospital extends Actor {
	notify() {
		console.log('Alerte Hopital')
	}

	isConcerned(alert) {
		return alert.level > 1;
	}
}
