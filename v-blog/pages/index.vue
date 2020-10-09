<template>
  <div class="container">
    <div>
      首页
    </div>
  </div>
</template>

<script>

export default {
  layout:'default',
  name:'index',
  components: {
    
  },
  asyncData({ redirect }) {
    redirect('/tcode')
  },
  created(){
   
  }
}
</script>

<style>

</style>
