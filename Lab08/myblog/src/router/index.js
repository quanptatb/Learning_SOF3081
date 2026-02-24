import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BlogList from '../views/BlogList.vue'
import BlogPost from '../views/BlogPost.vue'
import UserProfile from '../views/UserProfile.vue'
import UserProfileInfo from '../views/UserProfileInfo.vue'
import UserProfileSettings from '../views/UserProfileSettings.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

// Biến giả lập trạng thái đăng nhập (Mock authentication state)
let isAuthenticated = false; 

const routes = [
  // d. Tên Routes
  { path: '/', name: 'Home', component: Home },
  { path: '/blog', name: 'BlogList', component: BlogList },
  
  // b. Routes động
  { path: '/blog/:id', name: 'BlogPost', component: BlogPost },
  
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
    alias: '/me', // e. Alias Routes
    children: [   // a. Routes lồng nhau
      { path: 'info', name: 'UserProfileInfo', component: UserProfileInfo },
      { path: 'settings', name: 'UserProfileSettings', component: UserProfileSettings }
    ]
  },
  { path: '/login', name: 'Login', component: Login },
  
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true } // Đánh dấu route này cần xác thực
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// c. Bảo vệ Routes với xác thực giả lập
router.beforeEach((to, from, next) => {
  // Kiểm tra xem route chuẩn bị vào có yêu cầu xác thực không
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    // Nếu chưa đăng nhập, chuyển hướng về trang Login
    next({ name: 'Login' });
  } else {
    next();
  }
});

// Hàm hỗ trợ để Login.vue
export const setAuthenticated = (status) => {
  isAuthenticated = status;
}

export default router;