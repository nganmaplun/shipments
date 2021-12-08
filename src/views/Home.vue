<template>
    <body>
    <Header/>

      <h1>Hé lô hé lô con xì nhô</h1>
    <Footer/>
    </body>

</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home', 
  components: {
    Header,
    Footer
  }
}
</script>
 <style>
 body {
    background: url('~@/assets/background.png')  no-repeat  no-repeat center center fixed 100%

 }
 </style>