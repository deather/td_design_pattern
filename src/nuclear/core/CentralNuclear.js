import {Actor} from './Actor.js';

export class CentralNuclear {
	constructor() {
		this.observators = [];
	}

	registerObserver(observer) {
		if (observer instanceof Actor) {
			this.observators.push(observer);
		}
	}

	unregisterObserver(observer) {
		for (let i = 0; i < this.observators.length; i++) {
			if (this.observators[i].id === observer.id) {
				this.observators.splice(i, 1);
			}
		}
	}

	notifyObservers(alert) {
		for (let i = 0; i < this.observators.length; i++) {
			let observerCurrent = this.observators[i];

			if (observerCurrent.isConcerned(alert))
				observerCurrent.notify(alert);
		}
	}
}
