import {Actor} from './Actor.js';

export class Technician extends Actor {
	notify() {
		console.log('Alerte Technicien');
	}

	isConcerned(alert) {
		return true;
	}
}
