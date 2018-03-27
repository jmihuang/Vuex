<template>
  <div>
  {{dbcount}}
  <ul>
  <li v-for="list in lists">{{list}}</li>
  </ul>
  {{count}}
  <button @click="addCount">+1</button>
  </div>
</template>

<script>
import { mapState , mapMutations }from 'vuex';
export default {
  name: 'App',
  data(){
    return {
      localcount:3890
    }
  },
  computed:{
    dbcount(){
      return this.localcount*2
    },
    ...mapState(['count','title','lists']),
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
