<template>
  <q-page class="flex flex-center">
    <q-parallax src="../assets/mar.jpg">
      <h1 class="text-center text-green-14 duplicity-text">Pandora Admin</h1>
    </q-parallax>
    <q-parallax>
      <template v-slot:media>
        <img src="../assets/universe.jpg">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" style="width: 150px; height: 150px">
          <div class="text-h3 text-white text-center">Quasar Framework</div>
          <div class="text-h6 text-grey-3 text-center">
            v{{ $q.version }}
          </div>
        </div>
      </template>
    </q-parallax>
    <q-parallax src="../assets/ice.jpg">
      <h1 class="text-green-14 duplicity-text">Vue.js</h1>
    </q-parallax>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="scss" scoped>
.duplicity-text {
  text-shadow: 0 2px #fff,
               0 -2px #fff,
               2px 0 #fff,
               -2px 0 #fff,
               2px 2px #fff,
               2px -2px #fff,
               -2px 2px #fff,
               -2px -2px #fff,
               0 0 20px #000;
}
</style>
