import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import Apps from '../views/Apps.vue'
import PufferIcons from '../views/PufferIcons.vue'
import Puffercat_Apps from '../views/Puffercat_Apps.vue'
import Shapes from '../views/Shapes.vue'
import Blurry_Wallpapers from '../views/Blurry_Wallpapers.vue'
import Tipper_by_myCALC from '../views/Tipper_by_myCALC.vue'
import PufferIcons_Filled from '../views/PufferIcons_Filled.vue'
import WallCat from '../views/WallCat.vue'
import Tipper3 from '../views/Tipper3.vue'

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
  {
    path: '/details/Shapes',
    name: 'Shapes',
    component: Shapes,
  },
  {
    path: '/details/Blurry_Wallpapers',
    name: 'Blurry Wallpapers',
    component: Blurry_Wallpapers,
  },
  {
    path: '/details/Tipper_by_myCALC',
    name: 'Tipper by myCALC',
    component: Tipper_by_myCALC,
  },
  {
    path: '/details/PufferIcons_Filled',
    name: 'PufferIcons Filled',
    component: PufferIcons_Filled,
  },
  {
    path: '/details/WallCat',
    name: 'WallCat',
    component: WallCat,
  },
  {
    path: '/details/Tipper3',
    name: 'Tipper3',
    component: Tipper3,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
