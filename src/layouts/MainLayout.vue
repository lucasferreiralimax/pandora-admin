<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Pandora Admin
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    caption: 'Pandora Admin',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Dashboard',
    caption: 'Page Dashboard',
    icon: 'dashboard',
    link: 'dashboard'
  },
  {
    title: 'Login',
    caption: 'Page Login',
    icon: 'login',
    link: 'login'
  },
  {
    title: '404',
    caption: 'Page 404',
    icon: 'not_interested',
    link: '404'
  },
  {
    title: 'Github',
    caption: 'github.com/\nlucasferreiralimax/pandora-admin',
    icon: 'code',
    link: 'https://github.com/lucasferreiralimax/pandora-admin',
    target: true
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
