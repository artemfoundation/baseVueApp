<template>
  <div class='flex flex--column flex--middle'>
    <h1>404</h1>
    <span @click='$router.push("/")' class='button is-warning'>
      Вернуться на главную
    </span>
  </div>
</template>

<script>
export default {
  name: 'NotFound',

  created() {

  }
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1em;
}
</style>
