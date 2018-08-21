<template>
<div class='spinner'>
  <pulse-loader v-bind:loading='true' color='#ef4549' size='8px'/>
  <div class='spinner-text'>{{ text }}</div>
</div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader'

export default {
  name: 'Spinner',
  components: { PulseLoader },

  props: {
    text: {
      type: String,
      default: 'Идет загрузка...'
    }
  }
}
</script>

<style scoped>
.spinner {
  padding: 3em;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
}
.spinner-text {
  color: #212121;
  margin-top: 4px;
  white-space: nowrap;
}
</style>
