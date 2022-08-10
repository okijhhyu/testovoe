<template>
    <div class="container-fluid"> 
        <div class="div-inline">   
            <H1 class="title-news">Список новостей</H1>
        </div>
        <div class="div-inline">
        <a class="nav-link" @click.prevent="updatePage()">
        
            <img class="refresh-icon" src="@/assets/img/refresh.jpg" />
        </a>
        </div>
        <div class="div-inline">
            <form class="form-search">
                <input class="input-search" v-model="searchItem" type="text" placeholder="Искать здесь...">
                <button class="button-search" @click.prevent="searchGetItem(searchItem)"><img src="@/assets/img/search-icon.jpg" /></button>
            </form>
        </div>
        <hr>
    </div>
</template>
<script>

export default {
  data(){
    return{
      searchItem: ''
    }
  },
  mounted(){
    
    this.searchItem = this.$route.query.search
    
  },
  methods: {
    searchGetItem(searchItem) {
        this.$router.push({path: '1', query: {type: this.$route.query.type, search: searchItem }}) 
    },
    async updatePage(){
      this.$router.push({path: '1'})
      this.searchItem=''
      
    }
  },


}
</script>
<style scoped>
.div-inline {
    vertical-align: middle;
    display:inline-block;
    
}
div {
  background: #E5E5E5;
}
.title-news {

width: 307px;
height: 41px;
margin-top:40px;

font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 41px;


color: #000000;
}
.refresh-icon {
    width: 100px;
    height: 50px;
    padding-left: 3rem;
    margin-top:40px;
}
.container-fluid {
    padding-left: 15%;
    padding-right: 15%;
    
}
.form-search {
  width: 300px;
  vertical-align: middle;
}
.input-search {
  position: absolute;
  width: 10%;
  right: 20%;
  height: 42px;;
  outline: none;
  border: none;
  align-items: center;
  border-radius: 5px; 
  box-shadow: 0.1em 0.1em 1px rgba(122,122,122,0.5);
  
}

.button-search {
  position: absolute;
  right: 20%; 
  width: 42px;
  height: 42px;
  cursor: pointer;
  border: none;
  border-radius: 5px; 
  background-color: #ffffff;
  }

</style>