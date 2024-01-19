import Home from '~/pages/Home';
import Blog from '~/pages/Blog';

const publicRouters = [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
];
const privateRouters = [];

export { publicRouters, privateRouters };
