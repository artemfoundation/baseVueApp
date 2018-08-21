<template>
  <div class='flex flex--column flex--middle'>
    <h1>Главная</h1>
    <span @click='$router.push("/404")' class='button is-warning'>
      Перейти на 404
    </span>
  </div>
</template>

<script>
export default {
  name: 'Main',

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
