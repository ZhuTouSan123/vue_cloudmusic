import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  baseUrl:'http://localhost:3000',
  userID:'',
};
const mutations = {
  getID(state,value){
    state.userID = value
  }
}
export default new Vuex.Store({
  state,
  mutations
})