import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        lists: ['a', 'b', 'c'],
        title: 'StoreVuex'
    },
    mutations: {
        addCount(state) {
            state.count += 1;
            //如果state本身沒有的值，寫入必須要用set創建
            Vue.set(state, 'loding', true);
        },
        addDbcount(state, payload) {
            state.count += payload.addon
        }
    }
})

export default store;