import VueRouter from 'vue-router';
import routes from './routes';

// Vue.use(VueRouter);

// const base = _.get(window, '__INIT_STATE__.state.system.base', '/');

const router = new VueRouter({
  routes,
  mode: 'hash',
  base: '/me',
});

router.beforeEach((to, from, next) => {
  // if (to.name === 'Login' && localStorage.getItem('token')) {
  //   store.dispatch('getUserProfile').then(() => {
  //     return next(store.state.userProfile.routerLandingPage)
  //   })

  // }
  // if (to.meta.guarded && !localStorage.getItem('token')) {
  //   return next({ name: 'Login' });
  // }
  next();
});

export default router;