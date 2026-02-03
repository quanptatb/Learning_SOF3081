<template>
    <div class="container mt-4">
        <h3 class="mb-3">Nhập tháng của bạn:</h3>

        <input type="number" v-model.number="month" class="form-control mb-3" placeholder="Nhập tháng (1-12)" />

        <div class="result">
            <p v-if="month < 1 || month > 12" class="text-danger fw-bold">
                Vui lòng nhập tháng từ 1 đến 12!
            </p>

            <p v-else-if="month <= 3" class="text-success">
                🌸 Mùa Xuân (Spring)
            </p>

            <p v-else-if="month <= 6" class="text-warning">
                ☀️ Mùa Hè (Summer)
            </p>

            <p v-else-if="month <= 9" class="text-secondary">
                🍂 Mùa Thu (Autumn)
            </p>

            <p v-else class="text-info">
                ❄️ Mùa Đông (Winter)
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Khởi tạo giá trị mặc định là 1
const month = ref(1);
</script>

<style scoped>
/* CSS đơn giản để làm đẹp */
.container {
    max-width: 400px;
}
</style>