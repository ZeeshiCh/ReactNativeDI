// src/contexts/DIContext.js
import React, { createContext, useContext } from 'react';
import { UserRepository } from '../repositories/UserRepository';
import { UserViewModel } from '../viewmodels/UserViewModel';
import { NetworkManager } from '../api/NetworkManager';

const DIContext = createContext();

export const DIProvider = ({ children }) => {
    const networkManager = new NetworkManager();
    const userRepository = new UserRepository(networkManager);
    const userViewModel = new UserViewModel(userRepository);

    return (
        <DIContext.Provider value={{ userViewModel }}>
            {children}
        </DIContext.Provider>
    );
};

export const useDI = () => useContext(DIContext);
