// src/viewmodels/UserViewModel.js
import { makeAutoObservable, action } from 'mobx';
import { User } from '../models/User';
export class UserViewModel {
    user = null;
    isLoading = false;
    userRepository;

    constructor(userRepository) {
        this.userRepository = userRepository;
        makeAutoObservable(this, {
            loadUser: action,
            setLoading: action,
            setUser: action
        });
    }

    async loadUser(id) {
        this.setLoading(true);
        try {
            const user = await this.userRepository.getUser(id);
            this.setUser(user);
        } catch (error) {
            console.error(error);
        } finally {
            this.setLoading(false);
        }
    }

    setLoading(value) {
        this.isLoading = value;
    }

    setUser(user) {
        this.user = user;
    }
}
