import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { INITIAL_STATE, State, StateKey } from './app-state';
import {distinctUntilChanged, pluck} from 'rxjs/operators';
import { PtItem } from '../models/domain/pt-item.model';

export class Store {

    private subject = new BehaviorSubject<State>(INITIAL_STATE);

    private store = this.subject.asObservable().pipe(
                                        distinctUntilChanged()
                                    );

        // convert to an observable
        // performance improve

    public get value() {
        return this.subject.value;
    }

    public select<T>(name: StateKey): Observable<T> {

        // get prop value from observable
    return this.store
        .pipe(
                pluck<State, T>(name)
            );
        // return this.subject.pluck<State, T>(name).distinctUntilChanged<T>();
    }

    public set<T>(name: StateKey, state: T) {
        const nextState = {
            ...this.value,
            [name]: state
          };
        this.subject.next(nextState);
    }
}
