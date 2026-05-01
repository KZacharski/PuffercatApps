import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue';
import PufferIcons from '../views/PufferIcons.vue';
import Puffercat_Apps from '../views/Puffercat_Apps.vue';
import Shapes from '../views/Shapes.vue';
import Blurry_Wallpapers from '../views/Blurry_Wallpapers.vue';
import WallCat from '../views/WallCat.vue';
import BetterAperture from '../views/BetterAperture.vue';
import ThemeShowcase from '@/views/ThemeShowcase.vue';
const routes = [
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
        path: '/details/WallCat',
        name: 'WallCat',
        component: WallCat,
    },
    {
        path: '/details/BetterAperture',
        name: 'BetterAperture',
        component: BetterAperture,
    },
    {
        path: '/details/ThemeShowcase',
        name: 'ThemeShowcase',
        component: ThemeShowcase,
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;
//# sourceMappingURL=index.js.map