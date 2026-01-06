import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/home',
      component: HomeView
    },
    {
      path: '/about',
      name: '/about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: '/projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/download',
      name: '/download',
      component: () => import('../views/downloadView.vue')
    },

    {
      path: '/projects/personal-website',
      name: '/personal-website',
      component: () => import('../views/projects/personal-website.vue')
    },
    {
      path: '/projects/ImGui-menu',
      name: '/ImGui-menu',
      component: () => import('../views/projects/Imgui-menu.vue')
    },
    {
      path: '/projects/launcher',
      name: '/launcher',
      component: () => import('../views/projects/launcher.vue')
    },
    {
      path: '/projects/yt-dlp-gui',
      name: '/yt-dlp-gui',
      component: () => import('../views/projects/yt-dlp-gui.vue')
    },
  ]
})

export default router
