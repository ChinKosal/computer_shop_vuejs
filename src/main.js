import { createApp } from 'vue'
import './style.css'
// import './assets/style/tailwind.css'
// import './assets/style/bostrap.css'
import App from './App.vue'
// import App from '../src/views/threeClick/harddrive.vue'
// import App from '../src/components/card_detail_product.vue'
import Card from '../src/components/card_product.vue'
import ItemCard from '../src/components/item_in_mycard.vue'
import Footer from '../src/components/footer.vue'
import Card_detail from '../src/components/card_detail_product.vue'
import SlideShow from '../src/components/slide_show.vue'
import router from './router';

const app = createApp(App);
app.use(router);
app.component('SlideShow', SlideShow)
app.component('Card', Card);
app.component('ItemCard', ItemCard)
app.component('Card_detail', Card_detail)
app.component('Footer', Footer);
app.mount("#app");

