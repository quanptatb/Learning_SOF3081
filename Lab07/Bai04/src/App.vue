<template>
  <div>
    <LoginComponent 
      v-if="!isLoggedIn" 
      @loggedIn="handleLoginSuccess" 
    />

    <CommentComponent 
      v-else 
      :username="loggedInUser" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Import các component con
import LoginComponent from './components/LoginComponent.vue';
import CommentComponent from './components/CommentComponent.vue';

// Quản lý trạng thái đăng nhập và tên người dùng đã đăng nhập
const isLoggedIn = ref(false);
const loggedInUser = ref('');

// Hàm xử lý khi người dùng đăng nhập thành công (được kích hoạt từ emit của LoginComponent)
function handleLoginSuccess(username) {
  loggedInUser.value = username; // Lưu lại tên user
  isLoggedIn.value = true;       // Đổi trạng thái để ẩn form login, hiện form comment
}
</script>