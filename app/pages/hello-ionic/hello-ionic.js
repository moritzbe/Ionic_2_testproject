import {Page, NavController, MenuController} from 'ionic-angular';
import {LandingPage} from '../landing/landing';


@Page({
	templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {

	static get parameters() {
		return [[NavController], [MenuController]];
	}

	constructor(nav, menu) {
	this.nav = nav;
	this.menu = menu;
 	}

 	startApp() {
   	this.nav.push(LandingPage);
	}
}
