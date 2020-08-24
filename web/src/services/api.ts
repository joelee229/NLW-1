import axios from 'axios';

// Fetch é uma API nativa do navegador
const api = axios.create({
    baseURL: "http://localhost:3333"
});

export default api;