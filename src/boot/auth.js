export default async ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth) && !store.state.auth.authStatus) {
      next({ path: '/login' })
    } else {
      next()
    }
  })
}
