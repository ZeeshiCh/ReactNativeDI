// src/repositories/UserRepository.js
import { NetworkManager } from '../api/NetworkManager';
import { User } from '../models/User';

export class UserRepository {
    networkManager;

    constructor(networkManager) {
        this.networkManager = networkManager;
    }

    async getUser(id) {
        const data = await this.networkManager.fetchData(`https://jsonplaceholder.typicode.com/users/${id}`);
        return new User(data.id, data.name, data.email);
    }
}
