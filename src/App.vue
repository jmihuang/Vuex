<template>
  <div>
  {{dbcount}}
  <ul>
  <li v-for="list in storeList">{{list}}</li>
  </ul>
  {{storeNum}}
  {{storeCount}}
  <button @click="addCount">+1</button>
    <div>
       <router-view/>
     </div>
  <h2>Getters</h2>
  <ul>
    <li v-for="item in items"><input type="checkbox" v-model="item.done">{{item.todo}}</li>
  </ul>
  <b>已勾選：{{itemsDone}} 未勾選{{itemsNotDone}} 選取的項目有{{itemsWithID}}</b>
  <button @click="test(2)">itemsPickId</button> 目前選中的是{{pickId}}
<h2>Action讀取api</h2>
  {{apidata}}
  </div>

</template>

<script>
import { mapState , mapMutations ,mapGetters,mapActions}from 'vuex';
export default {
  name: 'App',
  data(){
    return {
      localcount:3890,
    }
  },
  computed:{
    dbcount(){
      return this.localcount*2
    },
    ...mapState({
      storeTitle:'title',
      storeList:'lists',
      items:'items',
      pickId:'pickId',
      apidata:'apidata',
      storeNum:state => state.count,
      storeCount(state){
          return state.count+this.localcount;
        },
      }),
    ...mapGetters(['itemsDone','itemsNotDone','itemsWithID','itemsPickId'])
  },
  methods:{
    test(id){
      this.itemsPickId(id);
    },
    ...mapMutations(['addCount']),
    ...mapActions(['fetchApi'])
  },
  mounted(){
    //傳送至action觸發fetchApi事件傳入payload action必須使用dispatch 
      this.fetchApi({page:2})
      //store.js 使用return promise 就可在此使用.then
        .then( ()=>{
          console.log('非同步fetchApi完成後執行的function');
        }
        );
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
