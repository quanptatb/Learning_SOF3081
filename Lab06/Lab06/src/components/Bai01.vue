<template>
    <div class="container mt-4">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h3>Xếp loại học lực</h3>
            </div>

            <div class="card-body">
                <div class="mb-3">
                    <label for="score" class="form-label">Nhập điểm trung bình của bạn:</label>
                    <input type="number" class="form-control" id="score" v-model.number="score" min="0" max="10"
                        placeholder="Ví dụ: 8.5">
                </div>

                <div class="alert mt-3" :class="alertColor" role="alert">
                    <strong>Xếp loại: </strong>

                    <span v-if="score < 5.0">Yếu</span>
                    <span v-else-if="score >= 5.0 && score < 6.5">Trung bình</span>
                    <span v-else-if="score >= 6.5 && score < 8.0">Khá</span>
                    <span v-else-if="score >= 8.0 && score < 9.0">Giỏi</span>
                    <span v-else>Xuất sắc</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Khởi tạo biến score (điểm) với giá trị mặc định, ví dụ là 0 hoặc null
const score = ref(0);

// (Tùy chọn) Tính toán màu sắc thông báo dựa trên điểm số cho đẹp mắt hơn
const alertColor = computed(() => {
    if (score.value < 5.0) return 'alert-danger';       // Màu đỏ
    if (score.value < 6.5) return 'alert-warning';      // Màu vàng
    if (score.value < 8.0) return 'alert-info';         // Màu xanh dương nhạt
    if (score.value < 9.0) return 'alert-primary';      // Màu xanh dương đậm
    return 'alert-success';                             // Màu xanh lá
});
</script>

<style scoped>
/* CSS tùy chỉnh nhỏ cho container */
.container {
    max-width: 600px;
}
</style>