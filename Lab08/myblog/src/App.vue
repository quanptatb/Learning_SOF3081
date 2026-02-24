<template>
  <header class="navbar-wrapper">
    <div class="container navbar glass">
      <div class="logo">
        <router-link :to="{ name: 'Home' }">MyBlog</router-link>
      </div>
      <nav class="nav-links">
        <router-link :to="{ name: 'Home' }">Trang chủ</router-link>
        <router-link :to="{ name: 'BlogList' }">Blog</router-link>
        <router-link :to="{ name: 'UserProfile' }">Profile</router-link>
        <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
        <router-link :to="{ name: 'Login' }" class="login-btn">Đăng nhập</router-link>
      </nav>
    </div>
  </header>

  <main class="main-content container">
    <router-view></router-view>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 MyBlog. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.navbar-wrapper {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-links a {
  color: var(--text-color);
  font-weight: 500;
  font-size: 0.9rem;
}

.nav-links a:hover {
  color: var(--primary);
}

.nav-links a.router-link-active {
  color: var(--primary);
  border-bottom: 2px solid var(--primary);
}

.login-btn {
  background-color: var(--primary);
  color: white !important;
  padding: 0.5rem 1.25rem !important;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.main-content {
  flex: 1;
  padding-top: 2rem;
  padding-bottom: 4rem;
}

.footer {
  padding: 2rem 0;
  text-align: center;
  color: #94a3b8;
  font-size: 0.875rem;
  border-top: 1px solid #e2e8f0;
}
</style>