<template>
  <div>
    <div v-for="news of 5" :key="news">news {{news}} </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  data: () => ({
    newses: []
  }),
  async mounted(){
    this.newses= await this.$axios.$get('api/getNews');
    this.length = data.length;
    this.newsList = data;
    this.newses = await this.$content(newses).fetch()
    },
}


</script>