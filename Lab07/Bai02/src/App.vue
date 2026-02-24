<template>
  <div v-if="!isLoggedIn" class="p-5 col-sm-4 mx-auto border mt-5 rounded shadow-sm">
    <h3 class="text-center mb-4">Form Đăng nhập</h3>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label class="form-label">Email:</label>
        <input 
          type="email" 
          class="form-control" 
          v-model="email"
          placeholder="Nhập email"
        >
        <p v-if="emailError" class="text-danger mt-1 mb-0"><small>{{ emailError }}</small></p>
      </div>

      <div class="mb-3">
        <label class="form-label">Mật khẩu: </label>
        <input 
          type="password" 
          class="form-control" 
          v-model="password"
          placeholder="Nhập mật khẩu"
        >
        <p v-if="passwordError" class="text-danger mt-1 mb-0"><small>{{ passwordError }}</small></p>
      </div>

      <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
    </form>
  </div>

  <div v-else class="p-5 col-sm-5 mx-auto text-center border mt-5 rounded shadow-sm">
    <h3 class="mb-4 text-success">Chào mừng, {{ email }}!</h3>
    <button @click="logout" class="btn btn-secondary">Đăng xuất</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Các biến quản lý trạng thái
const isLoggedIn = ref(false); 
const email = ref(''); 
const password = ref(''); 

// Các biến quản lý thông báo lỗi
const emailError = ref(''); 
const passwordError = ref(''); 

// Biểu thức chính quy (Regex) để kiểm tra định dạng email hợp lệ
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Hàm xử lý đăng nhập
const login = () => { 
  // 1. Reset thông điệp lỗi trước mỗi lần kiểm tra
  emailError.value = ''; 
  passwordError.value = ''; 

  // 2. Validate email
  if (!email.value) { 
    emailError.value = 'Email là bắt buộc.'; 
  } else if (!emailRegex.test(email.value)) { 
    emailError.value = 'Vui lòng nhập email hợp lệ.'; 
  }

  // 3. Validate mật khẩu
  if (!password.value) { 
    passwordError.value = 'Mật khẩu là bắt buộc.'; 
  }

  // 4. Nếu không có lỗi nào, xử lý login (cho phép đăng nhập thành công)
  if (!emailError.value && !passwordError.value) { 
    isLoggedIn.value = true; 
  }
};

// Hàm xử lý đăng xuất
const logout = () => {
  isLoggedIn.value = false; 
  email.value = ''; 
  password.value = ''; 
  emailError.value = ''; 
  passwordError.value = ''; 
};
</script>