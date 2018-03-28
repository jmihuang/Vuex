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
  <h2>TODO</h2>
  <ul>
    <li v-for="item in items"><input type="checkbox" v-model="item.done">{{item.todo}}</li>
  </ul>
  <b>已勾選：{{itemsDone}} 未勾選{{itemsNotDone}}</b>
  </div>

</template>

<script>
import { mapState , mapMutations ,mapGetters}from 'vuex';
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
      storeNum:state => state.count,
      storeCount(state){
          return state.count+this.localcount;
        },
      }),
    ...mapGetters(['itemsDone','itemsNotDone'])
  },
  methods:mapMutations(['addCount'])
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
