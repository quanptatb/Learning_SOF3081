<template>
  <div class="col-sm-4 p-5 mx-auto">
    <h3 class="text-center">Quản lý công việc</h3>
    
    <form @submit.prevent="addList">
      <div class="mb-3">
        <label class="form-label">Tên công việc:</label>
        <input 
          type="text" 
          class="form-control" 
          v-model="newToDo" 
          placeholder="Nhập tên công việc"
        >
      </div>
      <button type="submit" class="btn btn-primary">Thêm công việc</button>
    </form>

    <ul class="list-group mt-4">
      <li 
        class="list-group-item d-flex justify-content-between align-items-center" 
        v-for="(job, index) in jobs" 
        :key="index"
      >
        {{ job }}
        <button class="btn btn-danger btn-sm" @click="removeList(index)">Xóa</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Quản lý trạng thái cho input và danh sách công việc
const newToDo = ref('');
const jobs = ref(['Ăn sáng', 'Đi học', 'Chơi bóng rổ']);

// Hàm xử lý thêm công việc mới
const addList = () => {
  if (newToDo.value.trim()) { // Loại bỏ khoảng trắng ở đầu và cuối của chuỗi
    jobs.value.push(newToDo.value.trim()); // Thêm vào mảng jobs
    newToDo.value = ''; // Reset lại input field sau khi thêm
  }
};

// Hàm xử lý xóa công việc dựa theo index
const removeList = (index) => {
  jobs.value.splice(index, 1);
};
</script>