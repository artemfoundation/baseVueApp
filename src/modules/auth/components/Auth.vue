<template>
  <div class='login'>
    <div class='login__form'>
      <b-field
        label='Имя'
        :message='errors.has("name") ? errors.first("name") : ""'
        :type='errors.has("name") ? "is-danger" : ""'
      >
        <b-input
          v-model='name'
          name='name'
          size='is-medium'
          v-validate='"required"'
          placeholder='Введите имя'
        />
      </b-field>
      <b-field
        label='Пароль'
        :message='errors.has("password") ? errors.first("password") : ""'
        :type='errors.has("password") ? "is-danger" : ""'
      >
        <b-input
          v-model='password'
          name='password'
          size='is-medium'
          type='password'
          autocomplete='new-password'
          v-validate='"required"'
          placeholder='Введите пароль'
        />
      </b-field>
      <button @click='login' class='button is-primary is-large'>
        Войти
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data: () => ({
    name: '',
    password: ''
  }),

  methods: {
    login () {

    }
  }
}
</script>

<style scoped>
.login {
  margin: auto;
  width: 80%;
  padding: 48px 0;
}
</style>
