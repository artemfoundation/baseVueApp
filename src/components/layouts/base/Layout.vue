<template>
  <div class='flex flex--column scrollable'>
    <header/>
    <content/>
    <footer/>
  </div>
</template>

<script>
import Header from './header.vue'
import Content from './content.vue'
import Footer from './footer.vue'

export default {
  name: 'BaseLayout',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style scoped>
