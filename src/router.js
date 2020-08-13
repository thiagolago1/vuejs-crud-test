import Vue from 'vue';
import Router from 'vue-router';

import { isSignedIn } from './components/Users/auth';

import SignIn from './components/Users/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import AddProducts from './components/Products/AddProducts';
import UpdateProducts from './components/Products/UpdateProducts';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: SignIn, name: 'home' },
        { path: '/dashboard', component: Dashboard, name: 'dashboard',
            beforeEnter (_, __, next) {
                if (isSignedIn()) {
                next();
                return;
                }
                next('/');
            }
        },
        { path: '/add-new-product', component: AddProducts, name: 'addNewProduct',
            beforeEnter (_, __, next) {
                if (isSignedIn()) {
                next();
                return;
                }
                next('/');
            }
        },
        { path: '/update-product/:_id', component: UpdateProducts, name: 'updateProduct',
            beforeEnter (_, __, next) {
                if (isSignedIn()) {
                next();
                return;
                }
                next('/');
            }
        },
    ]
});