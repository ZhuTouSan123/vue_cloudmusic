import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from './router';
import store from './store';
import {Search,Button,Col,Row,Swipe,SwipeItem,Icon,Field,List,Cell} from 'vant';
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.use(Search);
Vue.use(Button);
Vue.use(Col);
Vue.use(Row);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(Field);
Vue.use(List);
Vue.use(Cell);
new Vue({
  el:'#app',
  router:router,
  store,
  render: (h) => h(App),
})
