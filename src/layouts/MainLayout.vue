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
        <q-toolbar-title>Pandora Admin</q-toolbar-title>
        <q-space />
        <q-btn-dropdown stretch flat>
          <template v-slot:label>
            <div class="row items-center no-wrap">
              <q-avatar size="32px" class="q-mr-sm">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
              <div class="text-center">Lucas</div>
            </div>
          </template>
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h6 q-mb-md">Settings</div>
              <q-toggle v-model="darkmode" :label="$t('darkmode')" />
            </div>
            <q-separator vertical inset class="q-mx-lg" />
            <div class="column items-center">
              <q-avatar size="72px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
              <div class="text-subtitle1 q-mt-md q-mb-xs">Lucas</div>
              <q-btn
                color="primary"
                label="Logout"
                push
                size="sm"
                v-close-popup
                @click="logout"
              />
            </div>
          </div>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list class="q-pb-xl">
        <q-item-label header class="text-grey-8">Menu</q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <div class="text-center absolute-bottom q-pa-sm bg-primary text-white">
        Quasar v{{ $q.version }}
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Home",
    caption: "Pandora Admin",
    icon: "home",
    link: "/"
  },
  {
    title: "Dashboard",
    caption: "Page Dashboard",
    icon: "dashboard",
    link: "dashboard"
  },
  {
    title: "Checkout",
    caption: "Page Checkout",
    icon: "shopping_cart",
    link: "checkout"
  },
  {
    title: "Login",
    caption: "Page Login",
    icon: "login",
    link: "login"
  },
  {
    title: "404",
    caption: "Page 404",
    icon: "not_interested",
    link: "404"
  },
  {
    title: "Github",
    caption: "github.com/\nlucasferreiralimax/pandora-admin",
    icon: "code",
    link: "https://github.com/lucasferreiralimax/pandora-admin",
    target: true
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      darkmode: false
    };
  },
  created() {
    const darkStorage = localStorage.getItem("dark");

    if (darkStorage) {
      this.darkmode = JSON.parse(darkStorage);
    } else {
      localStorage.setItem("dark", this.$q.dark.isActive);
    }
  },
  methods: {
    logout() {
      this.$store.commit("auth/authLogin", false);
      this.$router.push("/login");
    }
  },
  watch: {
    darkmode(val) {
      localStorage.setItem("dark", val);
      this.$q.dark.set(val);
    }
  }
};
</script>

<style lang="scss">
.q-toggle[aria-label="Dark mode"] {
  user-select: none;
}
</style>
