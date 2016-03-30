import {Page, NavController, MenuController} from 'ionic-angular';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';
import { Inject } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';


@Page({
  templateUrl: 'build/pages/landing/landing.html'
})

export class LandingPage {

	static get parameters() {
		return [[NavController], [MenuController]];
	}

	constructor(nav, menu, Http) {
	this.nav = nav;
	this.menu = menu;
	this.Http = Http;
 	}

 	getback() {
   	this.nav.push(HelloIonicPage);
    // JL().info("sinep");;
	}

	getloopback() {
        var data = null;

		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;

		xhr.addEventListener("readystatechange", function () {
		  if (this.readyState === 4) {
		    console.log(this.responseText);
		  }
		});

		xhr.open("GET", "http://0.0.0.0:3000/api/users/1");
		xhr.setRequestHeader("cache-control", "no-cache");
		xhr.setRequestHeader("postman-token", "aba52ce6-d8a2-50c0-65d4-b09a93c83e5a");

		xhr.send(data);
    }
}