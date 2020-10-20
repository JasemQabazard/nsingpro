import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export abstract class StorageService {
    constructor() { }

    abstract setItem<T>(key: string, value: T): void;

    abstract getItem<T>(key: string): T;

    abstract removeItem(key: string): void;

    abstract key(keyIndex: number): string;

    abstract clear(): void;

}
