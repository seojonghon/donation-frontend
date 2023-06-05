import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Cart from "@/pages/Cart.vue";
import Order from "@/pages/Order.vue";
import Orders from "@/pages/Orders.vue";
import {createRouter, createWebHistory} from "vue-router";

import Read from "@/pages/Read.vue";
import Create from "@/pages/Create.vue";
import Detail from "@/pages/Detail.vue";
import BoardForm from "@/pages/BoardForm.vue";
import Inform from "@/pages/Inform.vue";
import PHome from "@/pages/PHome.vue";
import PCart from "@/pages/PCart.vue";
import POrders from "@/pages/POrders.vue";
import POrder from "@/pages/POrder.vue";


const routes= [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/cart', component: Cart},
    {path: '/pcart', component: PCart},
    {path: '/order', component: Order},
    {path: '/orders', component: Orders},
    {path: '/porder', component: POrder},
    {path: '/porders', component: POrders},
    {path: "/Read", name: "Read", component: Read},
     {path: "/create", name: "Create", component: Create},
    {path: "/inform", name: "Inform", component: Inform},
    {path: "/createAccount", name: "BoardForm", component: BoardForm},
    //{path: '/create/:contentId?', name: 'Create', component: Create},
    {path: "/detail/:contentId", name: "Detail", component: Detail},
    {path: '/phome', component: PHome}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;