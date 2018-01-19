import {CentralNuclear} from './core/CentralNuclear.js';
import {Technician} from './core/Technician.js';
import {Firefighter} from './core/Firefighter.js';
import {Hospital} from './core/Hospital.js';
import {Minister} from './core/Minister.js';
import {Vault101} from './core/Vault101.js';
import {Alert} from './core/Alert.js';

let centrale = new CentralNuclear();

centrale.registerObserver(new Technician());
centrale.registerObserver(new Firefighter());
centrale.registerObserver(new Hospital());
centrale.registerObserver(new Minister());
centrale.registerObserver(new Vault101());

for (let i = 0; i < 4; i++) {
	let alert = new Alert(i);

	console.log('Alerte de niveau ' + i);
	centrale.notifyObservers(alert);
}
