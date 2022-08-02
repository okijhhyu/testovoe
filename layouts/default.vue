<template>
  <div>
    <div>
      <Header />
    </div>    
    <div>
      <navbar />
    </div>
    <main>
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/header'
import Navbar from '@/components/navbar'

export default {
  components: {
    Navbar,
    Header
  }
}
</script>