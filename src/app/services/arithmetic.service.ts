import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ArithmeticService {
    constructor() {}

    // add
    add(a: number, b: number) {
        return a+ b;
    }

    // substract
    sub(a: number, b: number) {
        return a - b;
    }
}