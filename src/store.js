import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        lists: ['a', 'b', 'c'],
        title: 'StoreVuex',
        items: [
            { id: 1, todo: 'return perchale', done: false },
            { id: 2, todo: 'withdraw money', done: false },
            { id: 3, todo: 'take cake from bakery', done: false }
        ]
    },
    mutations: {
        addCount(state) {
            state.count += 1;
            //如果state本身沒有的值，寫入必須要用set創建
            Vue.set(state, 'loding', true);
        },
        addDbcount(state, payload) {
            state.count += payload
        }
    },
    getters: {
        itemsDone(state) {
            return state.items.filter(item => item.done).length;
        },
        itemsNotDone(state, getters) {
            return state.items.length - getters.itemsDone;
        },
        itemsWithID(state) {
            let ids = [];
            state.items.forEach(item => {
                if (item.done)
                    ids.push(item.id);
            });
            return ids.join();
        }
    }
})

export default store;