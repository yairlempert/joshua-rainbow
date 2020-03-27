// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/reset.css'
import '~/assets/css/vars.css'
import '~/assets/css/styles.css'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel:"stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap"
  })
  head.meta.push({
    name:"Description",
    content:"Photography, programming and darkroom guides."
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
