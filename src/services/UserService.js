import axios from '~/services/CustomizeAxios';

const login = (email, password) => {
    return axios.post('/api/v1/login', { email, password });
};

const signup = (name, email, password) => {
    return axios.post('/api/v1/create-new-customer', { name, email, password });
};

const getItems = () => {
    return axios.get('/api/v1/get-all-items');
};

const getCart = (id) => {
    return axios.get(`/api/v1/find-cart/id=${id}`);
};

export { login, signup, getItems, getCart };
