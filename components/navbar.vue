<template>
    <div class="container-fluid">
        <div>
            <div class="block-inline">
                <nuxt-link exact no-prefetch active-class="active" :class="(typeof $route.query.type === 'undefined' || $route.query.type === 'all') ? 'text-black' : ''" :to="{ path: '1', query: { type: 'all' , search: $route.query.search} }">
                Все
                </nuxt-link>
            </div>
            <div class="block-inline">
                <nuxt-link exact no-prefetch active-class="active" :class="($route.query.type === 'rambler') ? 'text-black' : ''" :to="{ path: '1', query: { type: 'rambler', search: $route.query.search} }">
                Rabler.ru
                </nuxt-link>
            </div>
            <div class="block-inline">
                <nuxt-link exact no-prefetch active-class="active" :class="($route.query.type === 'mos') ? 'text-black' : ''" :to="{ path: '1', query: { type: 'mos', search: $route.query.search } }">
                Mos.ru
                </nuxt-link>
            </div>
            <div class="block-inline right-table">
                <button type="submit" herf="#" @click.prevent="changeDisplay('list')">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="18" height="8" :fill="$store.getters['displayMode/displayMode'] === 'list' ? '#C4C4C4' : '#0029FF'"/>
                <rect y="10" width="18" height="8" :fill="$store.getters['displayMode/displayMode'] === 'list' ? '#C4C4C4' : '#0029FF'"/>
                </svg>
                </button>
                <button type="submit"herf="#" @click.prevent="changeDisplay('rows')">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="8" height="8" :fill="$store.getters['displayMode/displayMode'] === 'list' ? '#0029FF' : '#C4C4C4'"/>
                <rect y="10" width="8" height="8" :fill="$store.getters['displayMode/displayMode'] === 'list' ? '#0029FF' : '#C4C4C4'"/>
                <rect x="10" width="8" height="8" :fill="$store.getters['displayMode/displayMode'] === 'list' ? '#0029FF' : '#C4C4C4'"/>
                <rect x="10" y="10" width="8" height="8" :fill="$store.getters['displayMode/displayMode'] === 'list' ? '#0029FF' : '#C4C4C4'"/>
                </svg>
                </button>
            </div>            
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    changeDisplay(type) {
      localStorage.setItem('displayMode', type);
      this.$store.dispatch('displayMode/changeDisplayMode', type)
      this.$router.push('/1')
    },
  },

  async asyncData(ctx){
    numberPage = ctx.params.id
    return {numberPage}
  }
}
</script>
<style scoped>
div {
  background: #E5E5E5;
}
button{
    border:none;
    background: #E5E5E5;
}
.container-fluid {
    padding-left: 15%;
    padding-right: 15%;
    color: #0000ff;
    word-spacing: 1rem;
}
.text-black{
    color: #000000;
}
.right-table {
    position:absolute;
    right: 20%;
}
.block-inline{
    display:inline-block;
    
}
</style>