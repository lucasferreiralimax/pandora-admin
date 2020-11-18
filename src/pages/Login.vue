<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <q-card class="q-pa-lg">
      <h4 class="q-mt-none q-mb-lg">
        Login
      </h4>
      <q-input class="q-mb-md" outlined color="black" bg-color="white" v-model="user" :label="$t('login.user')">
        <template v-slot:prepend>
          <q-icon name="person" color="black" />
        </template>
      </q-input>
      <q-input outlined color="black" bg-color="white" v-model="pass" :label="$t('login.pass')">
        <template v-slot:prepend>
          <q-icon name="lock" color="black" />
        </template>
      </q-input>
      <q-btn
        class="q-mt-lg full-width"
        color="white"
        text-color="blue"
        unelevated
        size="lg"
        to="/"
        :label="$t('login.enter')"
        no-caps
      />
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: '',
      pass: ''
    }
  }
}
</script>
