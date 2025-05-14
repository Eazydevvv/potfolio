import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentDetail from '../views/StudentDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/student/:id',
    name: 'student-detail',
    component: StudentDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
