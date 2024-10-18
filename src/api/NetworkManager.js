// src/api/NetworkManager.js
import axios from 'axios';

export class NetworkManager {
    async fetchData(url) {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw new Error('Network Error');
        }
    }
}
