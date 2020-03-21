export default [
  {
    path: "/photography/:category/:title/",
    component: () => import(/* webpackChunkName: "page--src--templates--photography-vue" */ "/home/theteacat/Documents/joshua-rainbow/src/templates/Photography.vue")
  },
  {
    path: "/photography/",
    component: () => import(/* webpackChunkName: "page--src--pages--photography-vue" */ "/home/theteacat/Documents/joshua-rainbow/src/pages/Photography.vue")
  },
  {
    path: "/programming/",
    component: () => import(/* webpackChunkName: "page--src--pages--programming-vue" */ "/home/theteacat/Documents/joshua-rainbow/src/pages/Programming.vue")
  },
  {
    path: "/darkroom/",
    component: () => import(/* webpackChunkName: "page--src--pages--darkroom-vue" */ "/home/theteacat/Documents/joshua-rainbow/src/pages/Darkroom.vue")
  },
  {
    path: "/contact/",
    component: () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/home/theteacat/Documents/joshua-rainbow/src/pages/Contact.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/theteacat/Documents/joshua-rainbow/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/theteacat/Documents/joshua-rainbow/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/theteacat/Documents/joshua-rainbow/node_modules/gridsome/app/pages/404.vue")
  }
]

