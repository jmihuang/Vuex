<template>  
<div>
<h1>{{count}}</h1>
<button @click="addDbcount(10)">+10</button>
  <ul>
     <li v-for="list in lists">{{list}}</li>
  </ul>
</div>
</template>


<script>
import {mapMutations} from 'vuex';
   export default {
        computed:{
            lists(){
                return this.$store.state.lists;
            },
            count(){
                return this.$store.state.count;
            },
        },
        methods:mapMutations({
            addDbcount:'addDbcount'
        })
    }
</script>