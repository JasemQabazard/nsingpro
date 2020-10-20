import { Injectable } from '@angular/core';
import { StorageNsService } from './ns/storage-ns.service';

import { PtAuthToken } from '../../core/models/domain/pt-auth-token.model';

const AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';

@Injectable({providedIn: 'root'})
export class AuthTokenService {

    get token(): PtAuthToken {
        return this.storageService.getItem<PtAuthToken>(AUTH_TOKEN_KEY);
    }

    set token(authToken: PtAuthToken) {
        this.storageService.setItem<PtAuthToken>(AUTH_TOKEN_KEY, authToken);
    }

    constructor(private storageService: StorageNsService) { }

}
