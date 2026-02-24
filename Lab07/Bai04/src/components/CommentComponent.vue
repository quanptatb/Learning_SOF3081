<template>
  <div class="col-sm-6 mx-auto m-5">
    <h2 class="mb-4">Bình luận bài viết</h2>
    
    <div class="card mb-4 shadow-sm">
      <img src="https://picsum.photos/800/400" class="card-img-top" alt="Hình ảnh" />
      <div class="card-body">
        <h3 class="card-title">8 loại rau củ quả giàu canxi</h3>
        <p class="card-text">
          Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi...
        </p>
      </div>
    </div>

    <form @submit.prevent="submitComment">
      <div class="mb-3">
        <textarea 
          class="form-control" 
          rows="3" 
          v-model="commentText" 
          placeholder="Nhập bình luận của bạn"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-success">Gửi bình luận</button>
    </form>

    <div v-if="comments.length > 0" class="mt-4 p-3 bg-light rounded border">
      <h5 class="mb-3">Danh sách các bình luận: </h5>
      <ul style="list-style-type: circle;" class="mb-0">
        <li v-for="(comment, index) in comments" :key="index" class="mb-2">
          <p class="mb-0"><strong>{{ comment.name }}</strong>: {{ comment.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Nhận props 'username' từ component cha
const props = defineProps(['username']);

const commentText = ref('');
// Mảng chứa các bình luận đã gửi
const comments = ref([]);

// Xử lý gửi bình luận
function submitComment() {
  if (commentText.value.trim()) {
    // Thêm bình luận mới vào mảng comments
    comments.value.push({
      name: props.username, // Sử dụng tên từ props để gắn cho bình luận
      text: commentText.value
    });
    // Xóa dữ liệu trong form sau khi gửi
    commentText.value = '';
  }
}
</script>