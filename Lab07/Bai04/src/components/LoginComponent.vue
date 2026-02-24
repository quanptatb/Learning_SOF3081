<template>
  <div class="m-5 col-sm-4 mx-auto border p-4 rounded shadow-sm">
    <h3 class="text-center mb-4">Đăng Nhập</h3>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="username" class="form-label">Tên đăng nhập: </label>
        <input 
          type="text" 
          class="form-control" 
          id="username" 
          v-model="username" 
          placeholder="Nhập tên đăng nhập" 
          required 
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mật khẩu: </label>
        <input 
          type="password" 
          class="form-control" 
          id="password" 
          v-model="password" 
          placeholder="Nhập mật khẩu" 
          required 
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Khai báo biến lưu dữ liệu form đăng nhập
const username = ref('');
const password = ref('');

// Khai báo emit để truyền sự kiện lên component cha
const emit = defineEmits(['loggedIn']);

// Hàm xử lý đăng nhập
function handleLogin() {
  if (username.value && password.value) {
    // Phát sự kiện 'loggedIn' kèm theo dữ liệu là username
    emit('loggedIn', username.value);
  }
}
</script>