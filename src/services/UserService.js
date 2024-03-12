import axios from 'axios';

const login = (email, password) => {
    return axios.post('/api/v1/login', { email, password });
};

const getCart = (id) => {
    return axios.get(`/api/v1/cart/customerID=${id}`);
};

export { login, getCart };
