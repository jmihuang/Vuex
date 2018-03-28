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
        ],
        apidata: {}

    },
    mutations: {
        addCount(state) {
            state.count += 1;
            //如果state本身沒有的值，寫入必須要用set創建
            Vue.set(state, 'loding', true);
        },
        addDbcount(state, payload) {
            state.count += payload
        },
        //action不能置換state值，所以必須用commit傳到mutaions去寫入
        apidata(state, payload) {
            state.apidata = payload;
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
        },
        itemsPickId(state) {
            return (pickId) => {
                Vue.set(state, 'pickId', pickId);
            }
        }
    },
    actions: {
        //非同步的只能使用action 不可使用mutations
        fetchApi(store, payload) {
            const url = "https://reqres.in/api/users?page=";
            fetch(`${url}${payload.id}`, { method: 'get' })
                .then(function (response) {
                    return response.json();
                }).then(function (rs) {
                    //但action不能置換state值，所以必須用commit傳到mutaions去寫入
                    store.commit('apidata', rs);
                })
        }

    }
})

export default store;