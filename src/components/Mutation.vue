<template>  
<div>
<h1>{{count}}</h1>
<button @click="addDbcount">+10</button>
  <ul>
     <li v-for="list in lists">{{list}}</li>
  </ul>
</div>
</template>


<script>
   export default {
        computed:{
            lists(){
                return this.$store.state.lists;
            },
            count(){
                return this.$store.state.count;
            },
        },
        methods:{
            addDbcount(){
                this.$store.commit('addDbcount',10);
            }
        }
    }
</script>