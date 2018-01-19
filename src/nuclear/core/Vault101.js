import {Actor} from './Actor.js';

export class Vault101 extends Actor {
	notify() {
		console.log('Alerte Vault101');
	}

	isConcerned(alert) {
		return alert.level > 3;
	}
}
