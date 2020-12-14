<template>
  <section class="login fullscreen text-white text-center q-pa-md flex flex-center">
    <q-card class="q-pa-lg">
      <h4 class="q-mt-none q-mb-lg text-black">
        Login
      </h4>
      <q-input class="q-mb-md" outlined color="black" bg-color="white" v-model="user" :label="$t('login.user')">
        <template v-slot:prepend>
          <q-icon name="person" color="black" />
        </template>
      </q-input>
      <q-input outlined color="black" bg-color="white" v-model="pass" :label="$t('login.pass')" type="password">
        <template v-slot:prepend>
          <q-icon name="lock" color="black" />
        </template>
      </q-input>
      <q-btn
        class="q-mt-lg full-width"
        color="primary"
        no-caps
        unelevated
        size="lg"
        :disabled="!user || !pass"
        :label="$t('login.enter')"
        @click="login"
      />
    </q-card>
    <q-dialog v-model="alertMsg">
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6">Login failed</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Tente <br>
          username: admin <br>
          password: 123456
        </q-card-section>
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: '',
      pass: '',
      alertMsg: false
    }
  },
  methods: {
    login () {
      // fake example
      if (this.user === 'admin' && this.pass === '123456') {
        this.$router.push('/dashboard')
      } else {
        this.alertMsg = true
      }
    }
  }
}
</script>

<style lang="scss">
  .login.fullscreen {
    background: url('../assets/mar.jpg') no-repeat;
    background-size: cover;
  }
</style>
