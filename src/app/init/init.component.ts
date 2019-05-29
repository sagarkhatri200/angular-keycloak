import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
	selector: 'app-init',
	templateUrl: 'init.component.html',
	styleUrls: ['init.component.css']
})
export class InitComponent implements OnInit {
	ngOnInit(): void {
		this.keyCloakService.isLoggedIn().then(
			isLoggedIn => {
				if (isLoggedIn) {
					let roles = this.keyCloakService.getUserRoles(true);
					if (roles.indexOf("ADMIN") > -1) {
						this.router.navigate(["admin"]);
					} else if (roles.indexOf("KIOSK") > -1) {
						this.router.navigate(["welcome"]);
					} else {
						this.router.navigate(["unauthorized"]);
					}
				} else {
					this.keyCloakService.login();
				}
			}

		)
	}

	constructor(private keyCloakService: KeycloakService, private router: Router) {

	}
}