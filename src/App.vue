<template>
  <div id='app' class='app'>
    <router-view/>
  </div>
</template>

<script>
import '@/assets/app.scss'
export default {
  name: 'App'
}
</script>

<style scoped>
.app {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background: white;
  max-width: 768px;
  margin: auto;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.02);
}
</style>
