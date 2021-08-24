import { createRouter, createWebHashHistory } from 'vue-router'
import Content from '../components/Content.vue'

const routes = [
  {
    path: '/',
    redirect: { name: 'monsterBoxes' }
  },
  {
    path: '/monsterBoxes',
    name: 'monsterBoxes',
    component: Content,
  },
  {
    path: '/bank',
    name: 'bank',
    component: Content,
  },
  {
    path: '/sets',
    name: 'sets',
    component: Content,
  },
  {
    path: '/specialOffers',
    name: 'specialOffers',
    component: Content,
  },
  {
    path: '/promocodit',
    name: 'promocodit',
    component: Content,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
