<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-6 border-end p-4">
        <h3 class="mb-4">Form Đăng Ký</h3>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label class="form-label">Họ tên:</label>
            <input type="text" class="form-control" v-model="formData.hoTen" required>
          </div>
          
          <div class="mb-3">
            <label class="form-label">Email:</label>
            <input type="email" class="form-control" v-model="formData.email" required>
          </div>
          
          <div class="mb-3">
            <label class="form-label">Mật khẩu:</label>
            <input type="password" class="form-control" v-model="formData.matKhau" required>
          </div>
          
          <div class="mb-3">
            <label class="form-label">Ngày sinh:</label>
            <input type="date" class="form-control" v-model="formData.ngaySinh" required>
          </div>
          
          <div class="mb-3">
            <label class="form-label me-3">Giới tính:</label>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" value="Nam" v-model="formData.gioiTinh">
              <label class="form-check-label">Nam</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" value="Nữ" v-model="formData.gioiTinh">
              <label class="form-check-label">Nữ</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" value="Khác" v-model="formData.gioiTinh">
              <label class="form-check-label">Khác</label>
            </div>
          </div>
          
          <div class="mb-4">
            <label class="form-label me-3">Ngôn ngữ:</label>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" value="Tiếng Việt" v-model="formData.ngonNgu">
              <label class="form-check-label">Tiếng Việt</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" value="Tiếng Anh" v-model="formData.ngonNgu">
              <label class="form-check-label">Tiếng Anh</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" value="Tiếng Nhật" v-model="formData.ngonNgu">
              <label class="form-check-label">Tiếng Nhật</label>
            </div>
          </div>
          
          <button type="submit" class="btn btn-primary">Đăng ký</button>
        </form>
      </div>

      <div class="col-sm-6 p-4">
        <h3 class="mb-4">Thông tin đã đăng ký:</h3>
        
        <div v-if="submittedData" class="mt-3">
          <p><strong>Họ tên:</strong> {{ submittedData.hoTen }}</p>
          <p><strong>Email:</strong> {{ submittedData.email }}</p>
          <p><strong>Ngày sinh:</strong> {{ submittedData.ngaySinh }}</p>
          <p><strong>Giới tính:</strong> {{ submittedData.gioiTinh }}</p>
          <p><strong>Ngôn ngữ:</strong> {{ submittedData.ngonNgu.join(', ') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

// Khởi tạo đối tượng reactive để lưu trữ dữ liệu binding từ form
const formData = reactive({
  hoTen: '',
  email: '',
  matKhau: '',
  ngaySinh: '',
  gioiTinh: 'Nam', // Giá trị mặc định là Nam
  ngonNgu: []      // Checkbox trả về một mảng chứa các value được chọn
});

// Biến lưu trữ dữ liệu sau khi người dùng bấm "Đăng ký"
const submittedData = ref(null);

// Hàm xử lý sự kiện submit form
const submitForm = () => {
  // Gán dữ liệu từ form vào biến submittedData để hiển thị
  // Dùng Spread syntax (...) để copy giá trị thay vì gán tham chiếu
  submittedData.value = { ...formData };
};
</script>