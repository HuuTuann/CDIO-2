import { Home, Blog, Login, SignUp } from '~/pages';

const publicRouters = [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
];
const privateRouters = [];

export { publicRouters, privateRouters };
