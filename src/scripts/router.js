import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Cart from "@/pages/Cart.vue";
import Order from "@/pages/Order.vue";
import Orders from "@/pages/Orders.vue";

import {createRouter, createWebHistory} from "vue-router";
import BoardForm from "@/pages/BoardForm.vue";
import BoardEdit from "@/pages/BoardEdit.vue";
import BoardDelete from "@/pages/BoardDelete.vue";

import Read from "@/components/Read.vue";
import Create from "@/pages/Create.vue";

const routes= [

    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/cart', component: Cart},
    {path: '/order', component: Order},
    {path: '/orders', component: Orders},
    {path: '/board', component: BoardForm},
    {path: '/Edit', component: BoardEdit},
    {path: '/del', component: BoardDelete},
    {path: '/read', component: Read},
    {path: '/create', component: Create}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;