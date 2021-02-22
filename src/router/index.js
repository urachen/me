import VueRouter from 'vue-router';
import routes from './routes';
const router = new VueRouter({
  routes,
  mode: 'hash',
  base: '/me',
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;