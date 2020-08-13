import Vue from 'vue';
import Router from 'vue-router';

import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import AddProducts from './components/Products/AddProducts';
import UpdateProducts from './components/Products/UpdateProducts';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: SignIn, name: 'home' },
        { path: '/dashboard', component: Dashboard, name: 'dashboard' },
        { path: '/add-new-product', component: AddProducts, name: 'addNewProduct' },
        { path: '/update-product/:_id', component: UpdateProducts, name: 'updateProduct' },
    ]
});