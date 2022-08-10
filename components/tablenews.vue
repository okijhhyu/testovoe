<template>
  <div class="news-block">
    <div class="li-news inline-block" v-for="news in newsCurrent" :key="news.link">
      <div class="li-news-container inline-block"> 
        <div class="title">
          <a :href=news.link>{{news.title}}</a> 
        </div>  
        <div class="description">
            {{news.description}}
        </div>
        <div class="about">
            <a :href=news.link>Подробнее</a>
        </div>
        <div class="date-source ">
          <div class="source inline-block">
            <a style="color: #DCDCDC" :href="news.source===mos ? 'https://www.mos.ru/' : 'https://www.rambler.ru/'">{{news.source}}.ru</a>
          </div>
          <div class="inline-block date">
            {{news.date}}
          </div>
        </div>     
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  props: {
    newsCurrent:{
        type: Array,
        default: () => [{}],
        required: true
    }
  },
}
</script>

<style scoped>
.about{
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #0029FF;
  padding-left: 5%;
  background: #ffffff;

}
.news-block{
  padding-left: 20%;
  padding-right: 20%;
}
.li-news {
    width: 50%;
}
.li-news-container{
  margin-left: 2%;
  width:95%;
  height: 200px;
  margin-top:50px;
  background: #ffffff;

}
.date{
  text-align: right;
  color: #DCDCDC;
  width: 70%;
  
}
.description{
  padding-left: 5%;
  height: 50%;

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
  width: 100%;
  background: #ffffff;
  color: #DCDCDC;
}
.text-color-portal{
  color: #DCDCDC;
}
.source{
  padding-left: 5%;
  width:29%;
  color: #DCDCDC;
}

.img-style{
  width: 200px;
  height: 100px;
  left: 200px;
  vertical-align: middle;
  

}
.title{
  padding-left: 5%;
  margin-top: 2%;
  height: 35%;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #0029FF;

}
</style>