<template>
    <div class="container-fluid"> 
        <div class="div-inline">   
            <H1 class="title-news">Список новостей</H1>
        </div>
        <div class="div-inline">
            <img class="refresh-icon" src="@/assets/img/refresh.jpg" />
        </div>
        <div class="div-inline">
            <form class="form-search">
                <input class="input-search" type="text" placeholder="Искать здесь...">
                <button class="button-search" type="submit">🔎</button>
            </form>
        </div>
        <hr>
    </div>
</template>

<style scoped>
.div-inline {
    vertical-align: middle;
    display:inline-block;
    
}
.title-news {

width: 307px;
height: 41px;


font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 41px;


color: #000000;
}
.refresh-icon {
    width: 75px;
    height: 25px;
    padding-left: 3rem;
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
  height: 42px;
  border: 2px solid #42aaff;
  border-radius: 5px 0 0 5px;
  outline: none;
  border-right :none;
  align-items: center;
  
}

.button-search {
  position: absolute;
  right: 20%; 
  width: 42px;
  height: 42px;
  border: 2px solid #42aaff;
  border-left: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  background-color: #ffffff;
  }

</style>