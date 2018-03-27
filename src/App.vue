<template>
  <div>
  {{count}}
  <button @click="addCount">+1</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    addCount(){
      this.$store.commit('addCount');
    }
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
