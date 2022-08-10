<template>
  <div>
 
    <div class="li-news" v-for="news of newsCurrent" :key="news.link">
    
      <div class="li-news-container"> 
      <ul>
        <li v-if="news.image === 'undefined'" class="img-block"><img src='https://w-dog.ru/wallpapers/6/3/294020449721828/kotenok-koshka-xoroshenkij.jpg' class="img-style inline-block" /></li>
        <li v-else class="img-block">
          <img :src="news.image" class="img-style" />
        </li>
        <li class="title-description">
        <div class="title-li">
          <a :href=news.link>{{news.title}}</a>
        </div>  
        <div class="description inline-block">
          {{news.description}}
        </div>
        </li>
           
      </ul>
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
  }
}

</script>

<style scoped>
li {
  display:inline-block;
  vertical-align: top;
}
.img-block{
  width: 20%;
  height: 200px;

  
}
.text-color-portal{
  color: #DCDCDC;
}
.title-description{
  height: 200px;
  width: 79%;

}
.li-news {
  padding-left: 25%;
  padding-right: 25%;
  
}
.li-news-container{
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
  width: 99%;
  height:114px;
  display: flex;
  align-items: flex-end;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #000000;  
}
.inline-block {
  display:inline-block;
  
}
.date-source{
  background: #FCFCFC;
  border-radius: 3px;
}
.source{ 
  padding-left: 1%;
  color: #DCDCDC;
  width:29%;
}

.img-style{
  margin-top: 20px;
  display: flex;
  align-items: flex-top;
  margin-left:20px;
  width: 85%;
  height: 100px;
}
.title-li{
  margin-top: 20px;
  height: 65px;
  width: 99%;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #0029FF;
}
</style>