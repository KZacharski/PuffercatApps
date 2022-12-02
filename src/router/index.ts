import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import Apps from '../views/Apps.vue'
import PufferIcons from '../views/PufferIcons.vue'
import Puffercat_Apps from '../views/Puffercat_Apps.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/apps'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/apps'
      },
      {
        path: 'apps',
        component: () => import('@/views/Apps.vue')
      },
      {
        path: 'soon',
        component: () => import('@/views/ComingSoon.vue')
      }
    ]
  },
  {
    path: '/details/PufferIcons',
    name: 'PufferIcons',
    component: PufferIcons,
  },
  {
    path: '/details/Puffercat_Apps',
    name: 'Puffercat Apps',
    component: Puffercat_Apps,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
