// src/models/User.js
import { makeAutoObservable } from 'mobx';

export class User {
    id = '';
    name = '';
    email = '';

    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        makeAutoObservable(this);
    }
}
