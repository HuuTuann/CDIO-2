import { Home, Menu, ProductDetail, Blog, Pages, Contact, Login, SignUp, Cart } from '~/pages';
import { DefaultLayout, BasicLayout } from '~/layouts';

const publicRouters = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/menu', component: Menu, layout: DefaultLayout },
    { path: '/product-detail/:id', component: ProductDetail, layout: DefaultLayout },
    { path: '/blog', component: Blog, layout: DefaultLayout },
    { path: '/pages', component: Pages, layout: DefaultLayout },
    { path: '/contact', component: Contact, layout: DefaultLayout },
    { path: '/login', component: Login, layout: BasicLayout },
    { path: '/signup', component: SignUp, layout: BasicLayout },
    { path: '/cart', component: Cart, layout: BasicLayout },
];
const privateRouters = [];

export { publicRouters, privateRouters };
