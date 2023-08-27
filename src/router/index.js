
import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import About from '../views/about.vue'
import Login from '../views/auth/login.vue'
import Card from '../components/card_product.vue'
import Card_detail from '../components/card_detail_product.vue'
import Footer from '../components/footer.vue'
import Createacc from '../views/auth/createacc.vue'
import Harddrive from '../views/threeClick/harddrive.vue'
import Laptop from '../views/threeClick/laptop.vue'
import Desktop from '../views/threeClick/desktop.vue'
import Mycard from '../views/mycard.vue'
import ItemCard from '../components/item_in_mycard.vue'
import SlideShow from '../components/slide_show.vue'
// import Item_my_card from '../views/item_in_mycard.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/createcc',
        name: 'createacc',
        component: Createacc
    },
    {
        path: '/card',
        name: 'card',
        component: Card
    },
    {
        path: '/card_detail',
        name: 'card_detail',
        component: Card_detail
    },
    {
        path: '/footer',
        name: 'footer',
        component: Footer
    },
    {
        path: '/harddrive',
        name: 'harddrive',
        component: Harddrive
    },
    {
        path: '/laptop',
        name: 'laptop',
        component: Laptop
    },
    {
        path: '/desktop',
        name: 'desktop',
        component: Desktop
    },
    {
        path: '/item_my_card',
        name: 'item_my_card',
        component: ItemCard
    },
    {
        path: '/mycard',
        name: 'mycard',
        component: Mycard
    },
    {
        path: '/slide',
        name: 'slide',
        component: SlideShow
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes,
})

export default router;