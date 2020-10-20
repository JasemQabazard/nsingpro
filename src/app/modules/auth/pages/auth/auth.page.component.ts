import { Component } from '@angular/core';
import { PtLoginModel } from '../../../../core/models/domain/pt-login.model';
import { PtUser } from '../../../../core/models/domain/pt-user.model';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
    selector: 'pt-auth-page',
    templateUrl: 'auth.page.component.html'
})

export class AuthPageComponent {

    public loggedIn = false;
    public loggedInName = '';

    constructor(
        private authService: AuthService
    ) {
        console.log('I am at auth page component ');
    }

    public onLogin(loginModel: PtLoginModel) {
        this.authService.loginInternal(loginModel)
        .subscribe((data: any) => {
            console.log('from auth page @@@ user ', data);
            this.loggedIn = true;
            this.loggedInName = data.fullName;
            // TODO: navigate to backlog
        });
    }

    public logout() {
        this.authService.logout();
        this.loggedIn = false;
        // TODO:navigate to the log in page
    }

}
