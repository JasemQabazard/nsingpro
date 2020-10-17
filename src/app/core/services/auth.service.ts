import { Injectable } from '@angular/core';
import { configs } from '../../config';

@Injectable({providedIn: 'root'})
export class AuthService {

    private get loginUrl() {
        return `${configs.apiEndpoint}/auth`;
    }

    constructor(
    ) { }

}
