import {Actor} from './Actor.js';

export class Minister extends Actor {
	notify() {
		console.log('Alerte Ministre')
	}

	isConcerned(alert) {
		return alert.level > 1;
	}
}
