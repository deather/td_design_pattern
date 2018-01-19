import {Actor} from './Actor.js';

export class Firefighter extends Actor {
	notify() {
		console.log('Alerte Pompier');
	}

	isConcerned(alert) {
		return alert.level > 0;
	}
}
