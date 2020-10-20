import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configs } from '../../../config';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PtItem } from '../../../core/models/domain/pt-item.model';

@Injectable({providedIn: 'root'})
export class BackLogRepository {
    constructor(private http: HttpClient) {
        console.log('@@@@ this.backlogUrl : ', this.backlogUrl);
    }

    private get backlogUrl() {
        return `${configs.apiEndpoint}/backlog`;
    }

    public getPtItems(): Observable<PtItem[]> {
        return this.http.get<PtItem[]>(this.backlogUrl)
            .pipe(
                catchError(error => {
                    console.log(error);
                    return throwError(error);
                })
            );
    }

/*     handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    } */
}
