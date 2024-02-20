import { Home, Menu, ProductDetail, Blog, Pages, Contact, Login, SignUp } from '~/pages';

const publicRouters = [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    { path: '/product-detail/:id', component: ProductDetail },
    { path: '/blog', component: Blog },
    { path: '/pages', component: Pages },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
];
const privateRouters = [];

export { publicRouters, privateRouters };
