import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';

@Injectable({providedIn: 'root'})
export class ServerErrorHandlerService {

    constructor() { }

    public handleHttpError(error: any) {
        return Observable.throw(error.json().error || 'Server error');
    }

}
