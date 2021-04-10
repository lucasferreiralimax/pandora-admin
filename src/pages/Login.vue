<template>
  <section class="login fullscreen text-center q-pa-md flex flex-center">
    <q-card class="q-pa-lg" @keyup.enter.native="login">
      <h4 class="q-mt-none q-mb-lg">
        Login
      </h4>
      <q-input
        class="q-mb-md"
        outlined
        v-model="user"
        :label="$t('login.user')"
      >
        <template v-slot:prepend>
          <q-icon name="person" color="black" />
        </template>
      </q-input>
      <q-input
        class="q-mb-md"
        outlined
        v-model="pass"
        :label="$t('login.pass')"
        type="password"
        v-if="!remember"
      >
        <template v-slot:prepend>
          <q-icon name="lock" color="black" />
        </template>
      </q-input>
      <q-btn
        class="full-width text-white"
        color="primary"
        no-caps
        unelevated
        size="lg"
        :disabled="remember ? !user : !user || !pass"
        :label="remember ? $t('login.send') : $t('login.enter')"
        @click="login"
      />
      <q-btn
        class="q-mt-md full-width"
        outline
        color="grey"
        no-caps
        unelevated
        size="md"
        :label="remember ? $t('login.back') : $t('login.remember')"
        @click="remember = !remember"
      />
    </q-card>
    <q-dialog v-model="alertMsg">
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6">Login failed</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Tente <br />
          username: admin <br />
          password: 123456
        </q-card-section>
        <q-card-actions align="right" class="text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="alertMsgRemember">
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6">Remember Send</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          See you email
        </q-card-section>
        <q-card-actions align="right" class="text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: "",
      pass: "",
      remember: false,
      alertMsg: false,
      alertMsgRemember: false
    };
  },
  methods: {
    login() {
      // fake example
      if (this.remember) {
        this.alertMsgRemember = true;
      } else {
        if (this.user === "admin" && this.pass === "123456") {
          this.$store.commit("auth/authLogin", true);
          this.$router.push("/dashboard");
        } else {
          this.alertMsg = true;
        }
      }
    }
  }
};
</script>

<style lang="scss">
.login.fullscreen {
  animation: 20s bg_anime infinite alternate;
  background: url("../assets/mar.jpg") repeat-x;
  background-size: cover;
}

@keyframes bg_anime {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 100%;
  }
}
</style>
