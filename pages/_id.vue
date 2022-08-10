<template>
  <div>
    <div v-if="$store.getters['displayMode/displayMode'] === 'list'">
      <linews :newsCurrent="newsCurrent[0]" />
    </div>
    <div v-if="$store.getters['displayMode/displayMode'] === 'rows'">
      <tablenews :newsCurrent="newsCurrent[0]" />
    </div> 
    <div class="bottom-aling">   
    <div v-if="((numberPage<=newsCurrent[1]-6)||(newsCurrent[1]<=5))">
      <div class="page-number" v-if="newsCurrent[1]<=5">
        <div class="inline-block pointer-page" v-for="page of newsCurrent[1]" :key="page" @click.prevent="openPage(page)"><div :class="String(page) === String($route.params.id) ? 'blue-text' : ''">&nbsp&nbsp{{page}}</div></div>
      </div>
      <div class="page-number" v-else>
        <div class="inline-block pointer-page" v-for="page of 4" :key="page" @click.prevent="openPage(page + numberPage)"><div :class="String(numberPage+page) === String($route.params.id) ? 'blue-text' : ''">&nbsp&nbsp{{page + numberPage}}</div></div>
        <div class="inline-block ">...</div>
        <div class="inline-block pointer-page" @click.prevent="openPage(newsCurrent[1])">{{newsCurrent[1]}}</div>
      </div>
    </div>
    <div class="page-number" v-else>
      <div class="inline-block pointer-page" v-for="page of newsCurrent[1]" :key="page" @click.prevent="openPage(page+numberPage)"><div v-if="(numberPage+page<=newsCurrent[1])"><div :class="String(numberPage+page) === String($route.params.id) ? 'blue-text' : ''">&nbsp&nbsp{{numberPage+page}}</div></div></div>
    </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Linews from '@/components/linews'
import Tablenews from '@/components/tablenews'
import axios from 'axios'
export default Vue.extend({
  components: {
    Linews,
    Tablenews
  },
  async asyncData(ctx){
    await ctx.store.dispatch('news/fetch')
  },
  methods: {
    openPage(id) {
      this.$router.push({...this.$route, params:{id}})
    },
  },
  mounted() {
    
    this.$store.dispatch('displayMode/changeDisplayMode', localStorage.getItem('displayMode'))
  },
  data(){
    return {
      numberPage: 1
    }
  },
  computed:{
    newsCurrent(){
      try{
        const news = this.$store.getters['news/news']
        const type = this.$store.getters['displayMode/displayMode'] === 'list'
        let newsSearch= []
        let newsSearchIndex = []
        if (typeof this.$route.query.search!='undefined'){  
          let searchWords= this.$route.query.search.split(' ')  
          let i
          for (i=0;i<searchWords.length;i++){
            newsSearchIndex =news.filter(item => (item.title.toLowerCase().match(searchWords[i].toLowerCase())!= null || item.description.toLowerCase().match(searchWords[i].toLowerCase())))
            if (i===0){
              newsSearch = newsSearchIndex
              
            }
            else {
            
            newsSearch = newsSearch.concat(newsSearchIndex)
            
            }
            
          }
        }
        else{
          newsSearch=news
        }
        
        let newsSource = []
        if (this.$route.params.id <= 2){
          this.numberPage = 0;
        }
        else { 
          this.numberPage = this.$route.params.id - 2;
        }
        if ((typeof this.$route.query.type === 'undefined' || this.$route.query.type === 'all') && newsSearch.length ){
          let maxPage = Math.ceil(type ? newsSearch.length / 3 : newsSearch.length / 4)
          return [newsSearch.slice(type ? this.$route.params.id * 3 - 3 : this.$route.params.id * 4 - 4, type ? this.$route.params.id * 3 : this.$route.params.id * 4), maxPage]
        } else {
          newsSource = newsSearch.filter(item => item.source === this.$route.query.type)
          let maxPage = Math.ceil(type ? newsSource.length / 3 : newsSource.length / 4)
          return [newsSource.slice(type ? this.$route.params.id * 3 - 3 : this.$route.params.id * 4 - 4, type ? this.$route.params.id * 3 : this.$route.params.id * 4), maxPage]
        }
      } catch {
        console.log('Ошибка _id')
      }
    }
  }
})


</script>

<style scoped>
.bottom-align {
   
}
.blue-text {
  color: #0029FF;
  
}
.page-number {
  color: #000000;
  text-align: center;
  width: 100%;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  padding-top: 50px;
  
}
.pointer-page{
  cursor: pointer;
}
div {
  background: #E5E5E5;
}
.li-news {
    width: 40%;
}
.li-news-container{
  
  width: 80%;
  height: 200px;
  margin-top:50px;
  background-color: #ffffff;
}
.date{

  padding-right: 10px;
  text-align: right;
  
}
.description{
font-family: 'Arial';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #000000;

}
.inline-block {
  
  display:inline-block;
  
}
.date-source{
    width: 80%;
  background-color: orange;
}
.source{
  position: relative;
}

.img-style{
  width: 200px;
  height: 100px;
  left: 200px;
  

}
.title{
  height: 44px;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #0029FF;

}
</style>