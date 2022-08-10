<template>
  <div class="page">
    <div>
      <Header />
    </div>    
    <div>
      <navbar />
    </div>
    <main>
      <div >
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Linews from '@/components/linews'
export default {
  components: {
    Navbar,
    Header,
    Linews
  }
}
</script>
<style scoped>
div {
  background: #E5E5E5;
}
.page {
height: 100vh;
width: 100vw;
}
</style>