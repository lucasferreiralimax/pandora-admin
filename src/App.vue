<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created () {
    const darkStorage = localStorage.getItem('dark')

    if (darkStorage) {
      this.$q.dark.set(JSON.parse(darkStorage))
    } else {
      localStorage.setItem('dark', this.$q.dark.isActive)
    }
  }
}
</script>
