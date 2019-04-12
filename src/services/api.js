import axios from 'axios'; // Cliente HTTP

const api = axios.create({
    baseURL : 'https://omnistack-backend-learning.herokuapp.com'
});

export default api;