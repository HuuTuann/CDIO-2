import axios from 'axios';

const login = (email, password) => {
    return axios.post('/api/v1/login', { email, password });
};

export { login };
