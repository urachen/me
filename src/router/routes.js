
const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@views/Main'),
    redirect: '/bio',
    meta: {
      guarded: false
    },
    children: [
      {
        path: '/bio',
        name: 'Bio',
        component: () => import('@views/Bio'),
        meta: {
          guarded: false
        }
      }, {
        path: '/project',
        name: 'Project',
        component: () => import('@views/Project'),
        meta: {
          guarded: false
        }
      },
      {
        path: '/projectDetail/:projectKey',
        name: 'ProjectDetail',
        component: () => import('@views/ProjectDetail'),
        meta: {
          guarded: false
        }
      }
    ]
  },
  {
    path: '/cv',
    name: 'Cv',
    component: () => import('@views/resume/Cv'),
    meta: {
      guarded: false
    }
  },
  {
    path: '/autobiography',
    name: 'Autobiography',
    component: () => import('@views/resume/Autobiography'),
    meta: {
      guarded: false
    }
  },
  {
    path: '/resume/index',
    name: 'ResumeIndex',
    component: () => import('@views/resume/index'),
    meta: {
      guarded: false
    }
  },
  {
    path: '*',
    redirect: '/bio'
  }
];

export default routes;