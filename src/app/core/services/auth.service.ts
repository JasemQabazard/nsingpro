import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configs } from '../../config';
import { PtUser } from '../models/domain/pt-user.model';
import { PtLoginModel } from '../models/domain/pt-login.model';
import { PtAuthToken } from '../models/domain/pt-auth-token.model';
import { ServerErrorHandlerService } from './server-error-handler.service';
import { AuthTokenService } from './auth-token.service';
import { StorageNsService } from './ns/storage-ns.service';
import { Store } from '../state/app-store';
import { Observable } from 'rxjs/index';
import {catchError, tap} from 'rxjs/operators';

const CURRENT_USER_KEY = 'CURRENT_USER_KEY';

@Injectable({providedIn: 'root'})
export class AuthService {

    private get loginUrl() { return `${configs.apiEndpoint}/auth`; }

    public get currentUser(): PtUser {
        const user = this.storageService.getItem<PtUser>(CURRENT_USER_KEY);
        if (!this.store.value.currentUser && user) {
            this.store.set<PtUser>('currentUser', user);
        }
        return user;
    }
    public set currentUser(ptUser: PtUser) {
        this.storageService.setItem<PtUser>(CURRENT_USER_KEY, ptUser);
        this.store.set<PtUser>('currentUser', ptUser);
    }

    constructor(
        private store: Store,
        private errorHandlerService: ServerErrorHandlerService,
        private authTokenService: AuthTokenService,
        private storageService: StorageNsService,
        private http: HttpClient
    ) { }

    public isLoggedIn(): boolean {
        const hasToken = !!this.authTokenService.token;
        const hasCurrentUser = !!this.currentUser;
        return hasToken && hasCurrentUser;
    }

/*     public login(loginModel: PtLoginModel): Observable<PtUser> {
        this.loginInternal(loginModel)
            .subscribe(data => {
                    console.log('back 1 ', data);
                }
                );
                return this.store.select<PtUser>('currentUser');
    } */

    public logout() {
        this.authTokenService.token = { access_token: '', dateExpires: new Date() };
        this.storageService.setItem(CURRENT_USER_KEY, '');
    }

    public loginInternal(loginModel: PtLoginModel): Observable<any> {
        return this.http.post(
            this.loginUrl,
                {
                    loginModel: loginModel,
                    grant_type: 'password'
                }
            ).pipe (
                tap((data: any) => {
                    this.authTokenService.token = data.authToken;
                    this.currentUser = data.user;
                })
            )
            .pipe(
                catchError(error => this.errorHandlerService.handleHttpError)
                );
    }

}
